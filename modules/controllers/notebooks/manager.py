from functools import lru_cache
from os import path as osp
import requests
import time
import json

from ..helpers import logger
from .utils import multi_urljoin, get_notebook_container_details
from utils.exceptions import CustomHttpException
from config import settings


TIMEOUT = settings.jupyterhub.API_TIMEOUT
HUB_URL = settings.jupyterhub.BASE_URL


def hub_api_request(method, path, raise_for_status=True, **kwargs):
    method = getattr(requests, method)
    if not path.startswith("/hub/api/"):
        url = multi_urljoin(HUB_URL, "/hub/api/", path)
    else:
        url = multi_urljoin(HUB_URL, path)
    resp = method(
        url,
        headers={"Authorization": f"token {settings.jupyterhub.API_TOKEN}"},
        **kwargs,
    )
    if raise_for_status:
        if resp.status_code == 404:
            raise CustomHttpException(
                status_code=404,
                detail="Couldn't find a route to the notebook instance.",
            )
        if resp.status_code == 409:
            raise CustomHttpException(status_code=409, detail="Duplicate entry found.")
        elif resp.status_code >= 300:
            logger.error(
                f"Hub request failed with; {resp.status_code} -> {resp.content}"
            )
            raise CustomHttpException(
                status_code=502,
                detail="Couldn't communicate with the notebook instance.",
            )
    return resp


def notebook_api_request(method, base_url, path, raise_for_status=True, **kwargs):
    method = getattr(requests, method)
    url = multi_urljoin(f"{base_url.rstrip('/')}/", path)
    resp = method(
        url,
        headers={"Authorization": f"token {settings.jupyterhub.API_TOKEN}"},
        **kwargs,
    )
    if raise_for_status:
        if resp.status_code == 404:
            raise CustomHttpException(
                status_code=404,
                detail="Couldn't find a route to the notebook instance.",
            )
        if resp.status_code == 409:
            raise CustomHttpException(status_code=409, detail="Duplicate entry found.")
        elif resp.status_code >= 300:
            logger.error(
                f"Hub request failed with; {resp.status_code} -> {resp.content}"
            )
            raise CustomHttpException(
                status_code=502,
                detail="Couldn't communicate with the notebook instance.",
            )
    return resp


def wait_for_hub():
    # Wait for the hub to be ready
    now = time.time()
    try:
        hub_api_request("get", "/")
    except requests.exceptions.RequestException:
        if time.time() - now > TIMEOUT:
            # raise TimeoutError(f"Hub did not start in {TIMEOUT} seconds")
            logger.error(f"Hub did not start in {TIMEOUT} seconds")
            raise CustomHttpException(
                status_code=504,
                detail="Couldn't reach the notebook instance, all requests timed out",
            )
        time.sleep(5)


def server_spawn_event_stream(progress_url):
    resp = hub_api_request("get", progress_url, stream=True)
    for line in resp.iter_lines():
        line = line.decode("utf8", "replace")
        # event lines all start with `data:`
        # all other lines should be ignored (they will be empty)
        if line.startswith("data:"):
            yield json.loads(line.split(":", 1)[1])


def is_server_ready(username, server_name=""):
    resp = hub_api_request("get", f"/users/{username}/servers/{server_name}")
    servers = resp.get("servers", {})
    if server_name not in servers:
        return False

    server = servers[server_name]
    if server["ready"]:
        logger.debug(f"Server {username}/{server_name} ready at {server['url']}")
        return True
    else:
        logger.debug(
            f"Server {username}/{server_name} not ready, pending {server['pending']}"
        )
        return False


def get_users():
    wait_for_hub()
    resp = hub_api_request("get", "/users")
    return resp.json()


def get_user(username):
    wait_for_hub()
    resp = hub_api_request("get", f"/users/{username}")
    return resp.json()


def create_user(username):
    wait_for_hub()

    # Create a new user
    resp = hub_api_request("post", "/users", json={"usernames": [username]})
    return resp.json()


def start_server(username, server_name):
    log_name = f"{username}/{server_name}".rstrip("/")

    user_model = get_user(username)

    # if server is not 'active', request launch
    if server_name not in user_model.get("servers", {}):
        logger.info(f"Starting server {log_name}")
        resp = hub_api_request("post", f"/users/{username}/servers/{server_name}")
        if resp.status_code == 201:
            logger.info(f"Server {log_name} is launched and ready")
        elif resp.status_code == 202:
            logger.info(f"Server {log_name} is launching...")
        else:
            logger.warning(f"Unexpected status: {resp.status_code}")

        user_model = get_user(username)

    # report server status
    server = user_model["servers"][server_name]
    if server["pending"]:
        status = f"pending {server['pending']}"
    elif server["ready"]:
        status = "ready"
    else:
        logger.error(f"Unexpected server state: {server}")
        raise CustomHttpException(
            status_code=502, detail="Couln't start the notebook instance."
        )

    logger.info(f"Server {log_name} is {status}")

    # wait for server to be ready using progress API
    progress_url = user_model["servers"][server_name]["progress_url"]
    for event in server_spawn_event_stream(progress_url):
        logger.info(f"Progress {event['progress']}%: {event['message']}")
        if event.get("ready"):
            server_url = event["url"]
            user_model = get_user(username)
            try:
                object_name = user_model["servers"][server_name]["state"]["object_name"]
            except KeyError:
                raise CustomHttpException(
                    status_code=502,
                    detail="Couldn't fetch all details from the notebook instance.",
                )
            break
    else:
        # server never ready
        logger.error(f"{log_name} never started!")
        raise CustomHttpException(
            status_code=502, detail="Spawning notebook instance failed."
        )

    return {"server_url_prefix": server_url, "instance_name": object_name}


def stop_server(username, server_name):
    log_name = f"{username}/{server_name}".rstrip("/")

    logger.info(f"Stopping server {log_name}")
    resp = hub_api_request(
        "delete", f"/users/{username}/servers/{server_name}", raise_for_status=False
    )
    if resp.status_code == 404:
        logger.info(f"Server {log_name} already stopped")

    resp.raise_for_status()
    if resp.status_code == 204:
        logger.info(f"Server {log_name} stopped")
        return

    # else: 202, stop requested, but not complete
    # wait for stop to finish
    logger.info(f"Server {log_name} stopping...")

    # wait for server to be done stopping
    now = time.time()
    while True:
        user_model = get_user(username)
        if server_name not in user_model.get("servers", {}):
            logger.info(f"Server {log_name} stopped")
            return
        server = user_model["servers"][server_name]
        if not server["pending"]:
            logger.error(f"Waiting for {log_name}, but no longer pending.")
            return CustomHttpException(
                status_code=502, detail="Couldn't stop the notebook instance"
            )
        logger.info(f"Server {log_name} pending: {server['pending']}")

        if time.time() - now > TIMEOUT:
            logger.error(f"Singleuser server did not stop in {TIMEOUT} seconds")
            return CustomHttpException(
                status_code=504,
                detail="Couldn't stop the notebook instance successfully",
            )

        # wait to poll again
        time.sleep(1)


@lru_cache(maxsize=5)
def get_notebook_service_details(username, server_name):
    server_details = start_server(username, server_name)
    service_details = get_notebook_container_details(server_details["instance_name"])
    service_details["service_url_prefix"] = (
        service_details["service_url_prefix"] or server_details["server_url_prefix"]
    )

    service_details["service_api"] = multi_urljoin(
        service_details["service_base_url"],
        service_details["service_url_prefix"],
        "/api/contents/",
    )
    return service_details


def get_notebook(username, server_name, notebook_name):
    service_details = get_notebook_service_details(username, server_name)
    resp = notebook_api_request(
        "get",
        service_details["service_api"],
        notebook_name,
        raise_for_status=False,
        params={"type": "file"},
    )
    if resp.status_code == 404:
        return
    elif resp.status_code == 200:
        return (
            multi_urljoin(
                settings.jupyterhub.PUBLIC_BASE_URL,
                service_details["service_url_prefix"],
                "/notebooks",
                f"/{resp.json()['path']}",
            )
            # + f"?token={service_details['api_token']}"
        )

    resp.raise_for_status()


def create_notebook(username, server_name, notebook_name):
    service_details = get_notebook_service_details(username, server_name)
    notebook = get_notebook(username, server_name, notebook_name)
    if notebook is not None:
        raise CustomHttpException(status_code=409, detail="Notebook already exists")

    payload = {
        "content": {
            "metadata": {},
            "nbformat": 4,
            "nbformat_minor": 5,
            "cells": [
                {
                    "cell_type": "markdown",
                    "metadata": {},
                    "source": "Some **Markdown**",
                },
            ],
        },
        "format": "json",
        "mimetype": None,
        "name": notebook_name,
        # "path": notebook_name,
        "type": "notebook",
    }

    resp = notebook_api_request(
        "put", service_details["service_api"], notebook_name, json=payload
    )

    return (
        multi_urljoin(
            settings.jupyterhub.PUBLIC_BASE_URL,
            service_details["service_url_prefix"],
            "/notebooks",
            f"/{resp.json()['path']}",
        )
        # + f"?token={service_details['api_token']}"
    )
