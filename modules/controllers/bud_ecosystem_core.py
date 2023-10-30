import requests

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
        print(f"Error in fetching agents {resp}")
        raise


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
    variables = {"id": id}
    resp = fetch_response(operation, "GetAgent", variables)
    
    try:
        return resp["data"]["agents_by_pk"]
    except KeyError:
        print(f"Error in fetching agent {resp}")
        raise


def add_agents(id: str, agent_name: str, agent_pipeline: str):
    operation = """
        mutation AddAgent($id: uuid, $agent_name: String, $agent_pipeline: json) {
            insert_agents(objects: {id: $id, agent_name: $agent_name, agent_pipeline: $agent_pipeline}) {
                affected_rows
                returning {
                    id
                    agent_name
                    agent_pipeline
                }
            }
        }
    """
    variables = {"id": id, "agent_name": agent_name, "agent_pipeline": agent_pipeline}
    resp = fetch_response(operation, "AddAgent", variables)
    
    try:
        if "errors" in resp and resp["errors"][0]["extensions"]["code"] == "constraint-violation":
            raise ValueError("Already exists")
        return resp["data"]["insert_agents"]
    except KeyError:
        print(f"Error in adding agents {resp}")
        raise   


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
    variables = {"id": id, "agent_name": agent_name, "agent_pipeline": agent_pipeline}
    resp = fetch_response(operation, "UpdateAgent", variables)
    
    try:
        return resp["data"]["update_agents_by_pk"]
    except KeyError:
        print(f"Error in updating agents {resp}")
        raise


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
    variables = {"id": id}
    resp = fetch_response(operation, "DeleteAgent", variables)
    
    try:
        return resp["data"]["delete_agents_by_pk"]
    except KeyError:
        print(f"Error in deleting agents {resp}")
        raise
