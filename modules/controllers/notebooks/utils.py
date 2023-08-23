import docker
from docker.errors import NotFound
from urllib.parse import urljoin, quote_plus

from config import settings
from utils.exceptions import CustomHttpException


client = docker.from_env()


def multi_urljoin(*parts):
    return urljoin(
        parts[0], "/".join(quote_plus(part.strip("/"), safe="/") for part in parts[1:])
    )


def get_container(container_name_or_id):
    try:
        return client.containers.get(container_name_or_id)
    except NotFound:
        raise CustomHttpException(
            status_code=404, detail="No such resourcce/instance exists"
        )


def get_notebook_container_details(container_name_or_id):
    container = get_container(container_name_or_id)
    nw_name = settings.jupyterhub.NETWORK
    private_ip = (
        container.attrs.get("NetworkSettings", {})
        .get("Networks", {})
        .get(nw_name, {})
        .get("IPAddress")
    )

    api_token = None
    port = None
    service_url_prefix = None
    notebook_dir = None
    for env in container.attrs["Config"].get("Env", []):
        env_split = env.split("=", 1)
        if env_split[0] in ["JUPYTERHUB_API_TOKEN", "JPY_API_TOKEN"] and not api_token:
            api_token = env_split[-1]
        elif env_split[0] == "JUPYTER_PORT":
            port = env_split[-1]
        elif env_split[0] == "JUPYTERHUB_SERVICE_PREFIX":
            service_url_prefix = env_split[-1]
        elif env_split[0] == "JUPYTERHUB_ROOT_DIR":
            notebook_dir = env_split[-1]

    if not (private_ip and port and notebook_dir):
        raise CustomHttpException(
            status_code=502, detail="Not able to reach the notebook instance."
        )

    if not api_token:
        raise CustomHttpException(
            status_code=502, detail="Not able to authenticate the notebook instance."
        )

    return {
        "service_base_url": f"http://{private_ip}:{port}",
        "service_url_prefix": service_url_prefix,
        "notebook_dir": notebook_dir,
        "api_token": api_token,
    }
