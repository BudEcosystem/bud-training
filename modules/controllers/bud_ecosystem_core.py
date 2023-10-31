import requests
from urllib.parse import urljoin, quote_plus

from .helpers import logger
from utils.exceptions import CustomHttpException
from config import settings


class BudEcosystemClient:
    def __init__(self) -> None:
        self.backend_session = self.refresh_backend_session()

    @staticmethod
    def multi_urljoin(*parts):
        return urljoin(
            parts[0],
            "/".join(quote_plus(part.strip("/"), safe="/") for part in parts[1:]),
        )

    def fetch_graphql_response(self, operation, operation_name, variables):
        headers = {
            "content-type": "application/json",
            "x-hasura-admin-secret": settings.bud.graphql.PWD,
        }
        resp = requests.post(
            settings.bud.graphql.URL,
            headers=headers,
            json={
                "query": operation,
                "variables": variables,
                "operationName": operation_name,
            },
        )
        try:
            resp.raise_for_status()
        except Exception:
            logger.error(f"Bud GraphQL API error => [{resp.status_code}]{resp.content}")
            raise CustomHttpException(
                status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
            )
        return resp.json()

    def authenticate_backend_client(self):
        headers = {"content-type": "application/json"}

        session = requests.Session()
        resp = session.post(
            self.multi_urljoin(settings.bud.backend.URL, "/token"),
            headers=headers,
            json={
                "email": settings.bud.backend.EMAIL,
                "password": settings.bud.backend.PWD,
            },
        )

        try:
            resp.raise_for_status()
        except Exception:
            logger.error(
                f"Bud Backend Auth error => [{resp.status_code}]{resp.content}"
            )
            raise CustomHttpException(
                status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
            )

        headers["Authorization"] = f"Bearer {resp.json()['access_token']}"
        session.headers = headers
        return session

    def refresh_backend_session(self):
        self.backend_session = None
        self.backend_session = self.authenticate_backend_client()
        return self.backend_session

    def fetch_backend_response(
        self, method, endpoint, headers=None, params=None, body=None, timeout=30
    ):
        url = self.multi_urljoin(settings.bud.backend.URL, endpoint)
        headers = headers or {}
        headers.update(self.backend_session.headers)
        params = params or {}
        body = body or {}

        try:
            resp = getattr(self.backend_session, method.lower())(
                url, headers=headers, params=params, json=body, timeout=timeout
            )
            if resp.status_code == 401:
                self.refresh_backend_session()
                resp = getattr(self.backend_session, method.lower())(
                    url, headers=headers, params=params, json=body, timeout=timeout
                )
        except requests.exceptions.Timeout: 
            raise CustomHttpException(
                status_code=504,
                detail="Failed to communicate with the Bud Ecosystem",
            )

        try:
            resp.raise_for_status()
        except Exception:
            logger.error(f"Bud Backend API error => [{resp.status_code}]{resp.content}")
            raise CustomHttpException(
                status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
            )
        return resp.json()

    def list_agents(self, page: int = 1, limit: int = 100):
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
        resp = self.fetch_graphql_response(operation, "GetAgents", variables)

        try:
            return resp["data"]["agents"]
        except KeyError:
            logger.error(f"Failed to fetch agents => {resp}", exc_info=True)
            raise CustomHttpException(
                status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
            )

    def list_agent(self, id: str):
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
        resp = self.fetch_graphql_response(operation, "GetAgent", variables)

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

    def assert_is_name_unique(self, agent_name: str, id: str = None):
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
        resp = self.fetch_graphql_response(operation, "GetAgentByName", variables)

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

    def add_agents(self, agent_name: str, agent_pipeline: dict):
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
        resp = self.fetch_graphql_response(operation, "AddAgent", variables)

        try:
            if (
                "errors" in resp
                and resp["errors"][0]["extensions"]["code"] == "constraint-violation"
            ):
                raise ValueError("Already exists")
            return resp["data"]["insert_agents_one"]
        except (KeyError, IndexError):
            logger.error(f"Failed to add agent => {resp}", exc_info=True)
            raise CustomHttpException(
                status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
            )

    def update_agents(self, id: str, agent_name: str, agent_pipeline: dict):
        operation = """
            mutation UpdateAgent($id: uuid!, $agent_name: String, $agent_pipeline: json) {
                update_agents_by_pk(pk_columns: {id: $id}, _set: {agent_name: $agent_name, agent_pipeline: $agent_pipeline}) {
                    id
                    agent_name
                    agent_pipeline
                }
            }
        """
        variables = {
            "id": str(id),
            "agent_name": agent_name,
            "agent_pipeline": agent_pipeline,
        }
        resp = self.fetch_graphql_response(operation, "UpdateAgent", variables)

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

    def delete_agents(self, id: str):
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
        resp = self.fetch_graphql_response(operation, "DeleteAgent", variables)

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
        
    def list_runs(self, page: int = 1, limit: int = 100):
        operation = """
            query GetAgentExecutions($limit: Int = 100, $offset: Int = 0) {
                agent_executions(limit: $limit, offset: $offset) {
                    output
                    status
                    created_at
                    updated_at
                    agent_id
                    id
                    session_id
                }
            }
        """
        variables = {"limit": limit, "offset": (page - 1) * limit}
        resp = self.fetch_graphql_response(operation, "GetAgentExecutions", variables)

        try:
            return resp["data"]["agent_executions"]
        except KeyError:
            logger.error(f"Failed to fetch agent executions => {resp}", exc_info=True)
            raise CustomHttpException(
                status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
            )

    def list_runs_by_agent_id(self, agent_id: str, page: int = 1, limit: int = 100):
        operation = """
            query GetAgentExecutions($agent_id: uuid!, $limit: Int = 100, $offset: Int = 0) {
                agent_executions(where: {agent_id: {_eq: $agent_id}}, limit: $limit, offset: $offset) {
                    output
                    status
                    created_at
                    updated_at
                    agent_id
                    id
                    session_id
                }
            }
        """
        variables = {"agent_id": str(agent_id), "limit": limit, "offset": (page - 1) * limit}
        resp = self.fetch_graphql_response(operation, "GetAgentExecutions", variables)

        try:
            return resp["data"]["agent_executions"]
        except KeyError:
            logger.error(f"Failed to fetch agent executions by agent id => {resp}", exc_info=True)
            raise CustomHttpException(
                status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
            )

    def list_agent_by_session_id(self, session_id: str):
        operation = """
            query GetAgentExecutions($session_id: uuid!) {
                agent_executions(where: {session_id: {_eq: $session_id}}) {
                    output
                    status
                    created_at
                    updated_at
                    agent_id
                    id
                    session_id
                }
            }
        """
        variables = {"session_id": str(session_id)}
        resp = self.fetch_graphql_response(operation, "GetAgentExecutions", variables)

        try:
            runs = resp["data"]["agent_executions"]
            if len(runs) == 0:
                raise CustomHttpException(
                    status_code=404, detail=f"No data exist for session id '{session_id}'"
                )
            return runs[0]
        except KeyError:
            logger.error(f"Failed to fetch agent executions by session id => {resp}", exc_info=True)
            raise CustomHttpException(
                status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
            )

    def delete_runs(self, session_id: str):
        operation = """
            mutation DeleteAgentExecution($session_id: uuid!) {
                delete_agent_executions(where: {session_id: {_eq: $session_id}}) {
                    affected_rows
                        returning {
                        agent_id
                        id
                        session_id
                    }
                }
            }
        """
        variables = {"session_id": str(session_id)}
        resp = self.fetch_graphql_response(operation, "DeleteAgentExecution", variables)

        try:
            run = resp["data"]["delete_agent_executions"]
            if run is None or run["affected_rows"] == 0:
                raise CustomHttpException(
                    status_code=404, detail=f"No data exist for session id '{session_id}'"
                )
            return run["returning"][0]
        except (KeyError, IndexError):
            logger.error(f"Failed to delete agent execution => {resp}", exc_info=True)
            raise CustomHttpException(
                status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
            )

    def list_nodes(self):
        resp = self.fetch_backend_response("get", "/api/v1/nodes")
        try:
            return resp["data"]["nodes"]
        except KeyError:
            logger.error(f"Failed to fetch nodes => {resp}", exc_info=True)
            raise CustomHttpException(
                status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
            )

    def publish_agent(self, id: str):
        resp = self.fetch_backend_response(
            "post", "/api/v1/agent/publish", body={"agent_id": str(id)}
        )
        return resp

    def run_agent(self, id: str, agent_pipeline: dict = None):
        agent_pipeline = agent_pipeline or {}
        resp = self.fetch_backend_response(
            "post",
            "/api/v1/execute-agent",
            body={"agent_id": str(id), "is_blocking": True, "data": agent_pipeline}
        )
        try:
            if resp["status"].lower() == "error":
                raise CustomHttpException(
                    status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
                )
            logger.info(f"Agent Run Response => {resp['data']}")
            return resp["data"]
        except KeyError:
            logger.error(f"Failed to fetch nodes => {resp}", exc_info=True)
            raise CustomHttpException(
                status_code=502, detail=f"Failed to communicate with the Bud Ecosystem"
            )
