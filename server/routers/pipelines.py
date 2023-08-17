from typing import List
from fastapi import APIRouter, Depends
from pydantic.types import UUID4

from ..dependencies import (
    validate_token_header,
)
from ..schemas import ResponseBase
from config import settings

from modules.controllers.pipelines import data_schemas
from modules.controllers.pipelines import manager


router = APIRouter(
    prefix="/pipeline",
    tags=["pipelines"],
    dependencies=[Depends(validate_token_header)],
    responses={404: {"description": "Not found"}},
)


@router.get("/config")
def read_pipeline_config() -> ResponseBase[data_schemas.PipelineConfig] | dict:
    pipelines = data_schemas.PipelineConfig(
        config=settings.pipelines.AVAILABLE_PIPELINES
    )
    return ResponseBase[data_schemas.PipelineConfig](data=pipelines.config)


@router.post("/")
def add_pipeline(
    pipeline: data_schemas.PipelineCreate,
    service: manager.PipelineCRUD = Depends(manager.get_pipeline_crud),
) -> ResponseBase[data_schemas.Pipeline] | dict:
    service.assert_is_name_unique(pipeline.name)
    # TODO: Name and dags validation not working
    pipeline = service.create(pipeline)
    return ResponseBase[data_schemas.Pipeline](
        data=data_schemas.Pipeline.from_orm(pipeline)
    )


@router.get("/")
def read_pipelines(
    page: int = 1,
    limit: int = 100,
    service: manager.PipelineCRUD = Depends(manager.get_pipeline_crud),
) -> ResponseBase[List[data_schemas.Pipeline]] | dict:
    pipelines = service.list(page=page, limit=limit)
    return ResponseBase[List[data_schemas.Pipeline]](
        data=[data_schemas.Pipeline.from_orm(pipeline) for pipeline in pipelines]
    )


@router.get("/{pipeline_id}", response_model=ResponseBase[data_schemas.Pipeline])
def read_pipeline_by_id(
    pipeline_id: UUID4,
    service: manager.PipelineCRUD = Depends(manager.get_pipeline_crud),
) -> ResponseBase[data_schemas.Pipeline] | dict:
    pipeline = service.get(id=pipeline_id)
    return ResponseBase[data_schemas.Pipeline](
        data=data_schemas.Pipeline.from_orm(pipeline)
    )


@router.put("/{pipeline_id}", response_model=ResponseBase[data_schemas.Pipeline])
def edit_pipeline(
    pipeline_id: UUID4,
    pipeline: data_schemas.PipelineUpdate,
    service: manager.PipelineCRUD = Depends(manager.get_pipeline_crud),
) -> ResponseBase[data_schemas.Pipeline] | dict:
    service.assert_is_name_unique(pipeline.name)
    # TODO: Name and dags validation not working
    pipeline = service.update(id=pipeline_id, obj=pipeline)
    return ResponseBase[data_schemas.Pipeline](
        data=data_schemas.Pipeline.from_orm(pipeline)
    )


@router.delete("/{pipeline_id}", response_model=ResponseBase[None])
def delete_pipeline(
    pipeline_id: UUID4,
    service: manager.PipelineCRUD = Depends(manager.get_pipeline_crud),
) -> ResponseBase[None] | dict:
    # TODO: Delete run & models, runs and pipeline
    service.delete(id=pipeline_id)
    return ResponseBase[None](
        message="Successfully deleted", meta={"pipeline_id": pipeline_id}, data=None
    )
