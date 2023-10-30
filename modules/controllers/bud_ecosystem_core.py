import requests

from .helpers import logger
from utils.exceptions import CustomHttpException
from config import settings


headers = {
    "content-type": "application/json",
    "x-hasura-admin-secret": settings.bud.graphql.PWD
}


def fetch_response(operation, operation_name, variables):
    resp = requests.post(settings.bud.graphql.URL, headers=headers, json={"query": operation, "variables": variables, "operationName": operation_name})
    resp.raise_for_status()
    return resp.json()


def list_agents(page: int = 1, limit: int = 100):
    operation = """
        query GetAgents($limit: Int = 100, $offset: Int = 0) {
            agents(limit: $limit, offset: $offset) {
                id
                agent_name
                agent_pipeline
            }
        }
    """
    variables = {"limit": limit, "offset": (page - 1) * limit}
    resp = fetch_response(operation, "GetAgents", variables)
    
    try:
        return resp["data"]["agents"]
    except KeyError:
        logger.error(f"Failed to fetch agents => {resp}", exc_info=True)
        raise CustomHttpException(
            status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
        )


def list_agent(id: str):
    operation = """
        query GetAgent($id: uuid!) {
            agents_by_pk(id: $id) {
                id
                agent_name
                agent_pipeline
            }
        }
    """
    variables = {"id": str(id)}
    resp = fetch_response(operation, "GetAgent", variables)
    
    try:
        agent = resp["data"]["agents_by_pk"]
        if agent is None:
            raise CustomHttpException(
                status_code=404, detail=f"No data exist for id '{id}'"
            )
        return agent
    except KeyError:
        logger.error(f"Failed to fetch agent => {resp}", exc_info=True)
        raise CustomHttpException(
            status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
        )


def assert_is_name_unique(agent_name: str, id: str = None):
    operation = """
        query GetAgentByName($name: String) {
            agents(where: {agent_name: {_eq: $name}}) {
                id
                agent_name
                agent_pipeline
            }
        }
    """
    variables = {"name": agent_name}
    resp = fetch_response(operation, "GetAgentByName", variables)
    
    try:
        agents = resp["data"]["agents"]
        if len(agents) > 1:
            raise CustomHttpException(
                status_code=412, detail=f"Name {agent_name} already exists."
            )
        elif len(agents) == 1:
            if id is not None and agents[0]["id"] == str(id):
                return True 
            else:
                raise CustomHttpException(
                    status_code=412, detail=f"Name {agent_name} already exists."
                )
        return True
    except KeyError:
        logger.error(f"Failed to fetch agent by name => {resp}", exc_info=True)
        raise CustomHttpException(
            status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
        )


def add_agents(agent_name: str, agent_pipeline: str):
    operation = """
        mutation AddAgent($agent_name: String, $agent_pipeline: json) {
            insert_agents_one(object: {agent_name: $agent_name, agent_pipeline: $agent_pipeline}) {
                id
                agent_name
                agent_pipeline
            }
        }
    """
    variables = {"agent_name": agent_name, "agent_pipeline": agent_pipeline}
    resp = fetch_response(operation, "AddAgent", variables)
    
    try:
        if "errors" in resp and resp["errors"][0]["extensions"]["code"] == "constraint-violation":
            raise ValueError("Already exists")
        return resp["data"]["insert_agents_one"]
    except (KeyError, IndexError):
        logger.error(f"Failed to add agent => {resp}", exc_info=True)
        raise CustomHttpException(
            status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
        )


def update_agents(id: str, agent_name: str, agent_pipeline: str):
    operation = """
        mutation UpdateAgent($id: uuid!, $agent_name: String, $agent_pipeline: json) {
            update_agents_by_pk(pk_columns: {id: $id}, _set: {agent_name: $agent_name, agent_pipeline: $agent_pipeline}) {
                id
                agent_name
                agent_pipeline
            }
        }
    """
    variables = {"id": str(id), "agent_name": agent_name, "agent_pipeline": agent_pipeline}
    resp = fetch_response(operation, "UpdateAgent", variables)
    
    try:
        agent = resp["data"]["update_agents_by_pk"]
        if agent is None:
            raise CustomHttpException(
                status_code=404, detail=f"No data exist for id '{id}'"
            )
        return agent
    except KeyError:
        logger.error(f"Failed to update agent => {resp}", exc_info=True)
        raise CustomHttpException(
            status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
        )


def delete_agents(id: str):
    operation = """
        mutation DeleteAgent($id: uuid!) {
            delete_agents_by_pk(id: $id) {
                id
                agent_name
                agent_pipeline
            }
        }
    """
    variables = {"id": str(id)}
    resp = fetch_response(operation, "DeleteAgent", variables)
    
    try:
        agent = resp["data"]["delete_agents_by_pk"]
        if agent is None:
            raise CustomHttpException(
                status_code=404, detail=f"No data exist for id '{id}'"
            )
    except KeyError:
        logger.error(f"Failed to delete agent => {resp}", exc_info=True)
        raise CustomHttpException(
            status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
        )
