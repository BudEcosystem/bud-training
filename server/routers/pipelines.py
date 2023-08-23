from typing import List
from fastapi import APIRouter, Depends
from pydantic.types import UUID4
from datetime import datetime, timezone

from ..dependencies import (
    validate_token_header,
)
from ..schemas import ResponseBase
from config import settings

from modules.controllers.pipelines import data_schemas
from modules.controllers.pipelines import manager
from workers import celery_worker
from utils.exceptions import CustomHttpException


router = APIRouter(
    prefix="/pipeline",
    tags=["pipelines"],
    dependencies=[Depends(validate_token_header)],
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
    pipeline_service: manager.PipelineCRUD = Depends(manager.get_pipeline_crud),
    run_service: manager.RunCRUD = Depends(manager.get_run_crud),
) -> ResponseBase[None] | dict:
    # TODO: Delete run & models, runs and pipeline
    run: data_schemas.Run = run_service.get_pipeline_runs(pipeline_id)
    if run and run.status in [0, 1]:
        raise CustomHttpException(
            status_code=422,
            detail=f"A Run for this pipeline is in progress.",
        )
    pipeline_service.delete(id=pipeline_id)
    return ResponseBase[None](
        message="Successfully deleted", meta={"pipeline_id": pipeline_id}, data=None
    )


@router.post("/start/{pipeline_id}", response_model=ResponseBase[data_schemas.Run])
def start_run(
    pipeline_id: UUID4,
    run_service: manager.RunCRUD = Depends(manager.get_run_crud),
    pipeline_service: manager.PipelineCRUD = Depends(manager.get_pipeline_crud),
) -> ResponseBase[data_schemas.Run] | dict:
    pipeline = pipeline_service.get(id=pipeline_id)
    run = run_service.create(pipeline)
    # TODO: Delete run in case of error
    celery_worker.run_pipeline.apply_async([str(run.run_id)], task_id=str(run.run_id))
    return ResponseBase[data_schemas.Run](data=data_schemas.Run.from_orm(run))


@router.post("/stop/{run_id}", response_model=ResponseBase[data_schemas.Run])
def stop_run(
    run_id: UUID4,
    service: manager.RunCRUD = Depends(manager.get_run_crud),
) -> ResponseBase[data_schemas.Run] | dict:
    run = service.get(id=run_id)
    celery_worker.revoke_task(str(run_id))
    run = service.update(
        id=run_id,
        obj=data_schemas.RunUpdate(status=4, finished_at=datetime.now(timezone.utc)),
    )
    return ResponseBase[data_schemas.Run](data=data_schemas.Run.from_orm(run))


@router.get("/{pipeline_id}/runs", response_model=ResponseBase[List[data_schemas.Run]])
def read_runs(
    pipeline_id: UUID4,
    service: manager.RunCRUD = Depends(manager.get_run_crud),
) -> ResponseBase[List[data_schemas.Run]] | dict:
    runs = service.get_pipeline_runs(pipeline_id=pipeline_id)
    return ResponseBase[List[data_schemas.Run]](
        data=[data_schemas.Run.from_orm(run) for run in runs]
    )


@router.get("/run/{run_id}", response_model=ResponseBase[data_schemas.Run])
def read_run_by_id(
    run_id: UUID4,
    service: manager.RunCRUD = Depends(manager.get_run_crud),
) -> ResponseBase[data_schemas.Run] | dict:
    run = service.get(id=run_id)
    return ResponseBase[data_schemas.Run](data=data_schemas.Run.from_orm(run))


@router.delete("/delete/{run_id}", response_model=ResponseBase[data_schemas.Run])
def delete_run(
    run_id: UUID4,
    service: manager.RunCRUD = Depends(manager.get_run_crud),
) -> ResponseBase[None] | dict:
    run = service.get(id=run_id)
    if run.status != 4:
        raise CustomHttpException(
            status_code=422,
            detail=f"Only stopped runs can be deleted",
        )
    else:
        service.delete(id=run_id)

    return ResponseBase[None](
        message="Successfully deleted", meta={"run_id": run_id}, data=None
    )
