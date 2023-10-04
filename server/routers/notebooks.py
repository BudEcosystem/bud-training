from pydantic.types import UUID4
from fastapi import APIRouter, Depends
from copy import deepcopy

from ..schemas import ResponseBase
from ..dependencies import (
    validate_token_header,
)

from .. import logger
from modules.controllers.pipelines import manager as pipeline_manager
from modules.controllers.pipelines.dag_schemas import BuildDAG
from modules.controllers.pipelines.data_schemas import PipelineUpdate, Pipeline
from modules.controllers.notebooks import manager
from utils.exceptions import CustomHttpException


router = APIRouter(
    prefix="/notebook",
    tags=["notebooks"],
    dependencies=[Depends(validate_token_header)],
)


@router.post("/", response_model=ResponseBase[dict])
def create_or_start_notebook(
    pipeline_id: UUID4,
    node_ref_id: str,
    service: pipeline_manager.PipelineCRUD = Depends(
        pipeline_manager.get_pipeline_crud
    ),
) -> ResponseBase[dict] | dict:
    pipeline = service.get(id=pipeline_id)
    pipeline = Pipeline.from_orm(pipeline)
    nb_node = None
    pipeline_cpy = deepcopy(pipeline)
    for node_idx, node in enumerate(pipeline.dags["pipeline"]["nodes"]):
        if node["id"] == node_ref_id:
            dag = BuildDAG(config={"pipeline": {"nodes": [node], "edges": []}}).graph
            if dag.nodes[node_ref_id].category_id == 2:
                nb_node = pipeline_cpy.dags["pipeline"]["nodes"][node_idx]
                break
            else:
                raise CustomHttpException(
                    status_code=422,
                    detail=f"Node '{node_ref_id}' doesn't belong to a recognized notebook category.",
                )

    if nb_node is None:
        raise CustomHttpException(
            status_code=404,
            detail=f"Node '{node_ref_id}' not found in pipeline '{str(pipeline_id)}'",
        )

    logger.info(nb_node)
    nb_name = [
        prop["value"]
        for prop in nb_node["data"]["properties"]
        if prop["name"] == "name"
    ]

    if not len(nb_name):
        raise CustomHttpException(
            status_code=422, detail=f"Node '{node_ref_id}' is malformed"
        )

    nb_name = nb_name[0]

    if not nb_name.strip():
        raise CustomHttpException(
            status_code=422, detail="Not a valid name for the notebook."
        )

    nb_node_output = [
        prop for prop in nb_node["data"]["outputs"] if prop["name"] == "url"
    ]

    if not len(nb_node_output):
        raise CustomHttpException(
            status_code=422, detail=f"Node '{node_ref_id}' is malformed"
        )

    nb_node_output = nb_node_output[0]

    username = "test001"
    server_name = f"{username}-server"
    try:
        _ = manager.get_user(username)
    except CustomHttpException as exc:
        if exc.status_code == 404:
            _ = manager.create_user(username)

    nb_name = f"{nb_name.strip().replace('.ipynb', '')}.ipynb"
    nb_url = manager.get_notebook(username, server_name, nb_name)
    if nb_url is None:
        nb_url = manager.create_notebook(username, server_name, nb_name)

    nb_node_output["value"] = nb_url
    pipeline_cpy.dags["pipeline"]["nodes"][node_idx] = nb_node
    service.update(pipeline_id, pipeline_cpy)

    return ResponseBase[dict](data={"notebook_url": nb_url})
