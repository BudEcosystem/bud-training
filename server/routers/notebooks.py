from typing import List
from pydantic.types import UUID4
from fastapi import APIRouter, Depends, File, UploadFile

from ..schemas import ResponseBase
from ..dependencies import (
    validate_token_header,
)
from modules.controllers.pipelines import data_schemas
from modules.controllers.notebooks import manager
from modules.controllers.datasets import utils


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