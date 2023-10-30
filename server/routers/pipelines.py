from typing import List
from fastapi import APIRouter, Depends
from pydantic.types import UUID4
import requests

from ..dependencies import (
    validate_token_header,
)
from ..schemas import ResponseBase
from config import settings

from modules.controllers.pipelines import data_schemas
from modules.controllers.pipelines import manager
from modules.controllers import bud_ecosystem_core
from utils.exceptions import CustomHttpException


router = APIRouter(
    prefix="/pipeline",
    tags=["pipelines"],
    dependencies=[Depends(validate_token_header)],
)


@router.get("/config")
def read_pipeline_config() -> ResponseBase[data_schemas.PipelineConfig] | dict:
    resp = requests.get("")
    if resp.status_code != 200:
        CustomHttpException(status_code=502, detail="Couldn't reach the node registry")
    pipelines = data_schemas.PipelineConfig(
        config=resp.json()["data"]["nodes"]
    )
    return ResponseBase[data_schemas.PipelineConfig](data=pipelines.config)


@router.post("/")
def add_pipeline(
    pipeline: data_schemas.PipelineCreate,
    # service: manager.PipelineCRUD = Depends(manager.get_pipeline_crud),
) -> ResponseBase[data_schemas.Pipeline] | dict:
    bud_ecosystem_core.assert_is_name_unique(pipeline.agent_name)
    # TODO: Name and dags validation not working
    # pipeline = service.create(pipeline)
    agent = bud_ecosystem_core.add_agents(pipeline.agent_name, pipeline.agent_pipeline)
    return ResponseBase[data_schemas.Pipeline](
        data=data_schemas.Pipeline(**agent)
    )


@router.get("/")
def read_pipelines(
    page: int = 1,
    limit: int = 100,
    # service: manager.PipelineCRUD = Depends(manager.get_pipeline_crud),
) -> ResponseBase[List[data_schemas.Pipeline]] | dict:
    # pipelines = service.list(page=page, limit=limit)
    agents = bud_ecosystem_core.list_agents(page, limit)
    return ResponseBase[List[data_schemas.Pipeline]](
        data=[data_schemas.Pipeline(**agent) for agent in agents]
    )


@router.get("/{pipeline_id}", response_model=ResponseBase[data_schemas.Pipeline])
def read_pipeline_by_id(
    pipeline_id: UUID4,
    # service: manager.PipelineCRUD = Depends(manager.get_pipeline_crud),
) -> ResponseBase[data_schemas.Pipeline] | dict:
    # pipeline = service.get(id=pipeline_id)
    agent = bud_ecosystem_core.list_agent(pipeline_id)
    return ResponseBase[data_schemas.Pipeline](
        data=data_schemas.Pipeline(**agent)
    )


@router.put("/{pipeline_id}", response_model=ResponseBase[data_schemas.Pipeline])
def edit_pipeline(
    pipeline_id: UUID4,
    pipeline: data_schemas.PipelineUpdate,
    # service: manager.PipelineCRUD = Depends(manager.get_pipeline_crud),
) -> ResponseBase[data_schemas.Pipeline] | dict:
    bud_ecosystem_core.assert_is_name_unique(pipeline.agent_name, pipeline_id)
    # TODO: Name and dags validation not working
    # pipeline = service.update(id=pipeline_id, obj=pipeline)
    agent = bud_ecosystem_core.update_agents(pipeline_id, pipeline.agent_name, pipeline.agent_pipeline)
    return ResponseBase[data_schemas.Pipeline](
        data=data_schemas.Pipeline(**agent)
    )


@router.delete("/{pipeline_id}", response_model=ResponseBase[None])
def delete_pipeline(
    pipeline_id: UUID4,
    # pipeline_service: manager.PipelineCRUD = Depends(manager.get_pipeline_crud),
    # run_service: manager.RunCRUD = Depends(manager.get_run_crud),
) -> ResponseBase[None] | dict:
    # TODO: Delete run & models, runs and pipeline
    # run: data_schemas.Run = run_service.get_pipeline_runs(pipeline_id)
    # if run and run.status in [0, 1]:
    #     raise CustomHttpException(
    #         status_code=422,
    #         detail=f"A Run for this pipeline is in progress.",
    #     )
    # pipeline_service.delete(id=pipeline_id)
    agent = bud_ecosystem_core.delete_agents(pipeline_id)
    return ResponseBase[None](
        message="Successfully deleted", meta={"pipeline_id": pipeline_id}, data=None
    )
