from typing import List
from fastapi import APIRouter, Depends
from pydantic.types import UUID4
from datetime import datetime, timezone

from ..dependencies import (
    validate_token_header,
)
from ..schemas import ResponseBase

from modules.controllers.pipelines import data_schemas
from modules.controllers.pipelines import manager
from modules.controllers import bud_ecosystem_client
from workers import celery_worker
from utils.exceptions import CustomHttpException


router = APIRouter(
    prefix="/run",
    tags=["runs"],
    dependencies=[Depends(validate_token_header)],
)


@router.post("/start/{agent_id}", response_model=ResponseBase[data_schemas.Run])
def start_run(
    agent_id: UUID4,
    # run_service: manager.RunCRUD = Depends(manager.get_run_crud),
    # pipeline_service: manager.PipelineCRUD = Depends(manager.get_pipeline_crud),
) -> ResponseBase[data_schemas.Run] | dict:
    # pipeline = pipeline_service.get(id=agent_id)
    # run = run_service.create(pipeline)
    # TODO: Delete run in case of error
    # celery_worker.run_pipeline.apply_async([str(run.session_id)], task_id=str(run.session_id))
    # return ResponseBase[data_schemas.Run](data=data_schemas.Run.from_orm(run))
    
    agent = bud_ecosystem_client.list_agent(agent_id)
    bud_ecosystem_client.publish_agent(agent_id)
    resp = bud_ecosystem_client.run_agent(agent_id)
    return ResponseBase[None](message="Agent execution initiated", meta={"session_id": ""}, data=None)


@router.post("/stop/{session_id}", response_model=ResponseBase[data_schemas.Run])
def stop_run(
    session_id: UUID4,
    # service: manager.RunCRUD = Depends(manager.get_run_crud),
) -> ResponseBase[data_schemas.Run] | dict:
    # run = service.get(id=session_id)
    # celery_worker.revoke_task(str(session_id))
    # run = service.update(
    #     id=session_id,
    #     obj=data_schemas.RunUpdate(status=4, finished_at=datetime.now(timezone.utc)),
    # )
    # return ResponseBase[data_schemas.Run](data=data_schemas.Run.from_orm(run))
    # TODO: Add agent stop
    return ResponseBase[None](message="Agent execution terminated", meta={"session_id": ""}, data=None)


@router.get("/", response_model=ResponseBase[List[data_schemas.Run]])
def read_runs(
    agent_id: UUID4 = None,
    page: int = 1,
    limit: int = 100,
    # service: manager.RunCRUD = Depends(manager.get_run_crud),
) -> ResponseBase[List[data_schemas.Run]] | dict:
    if agent_id is None:
        # runs = service.list(page=page, limit=limit)
        runs = bud_ecosystem_client.list_runs(page=page, limit=limit)
    else:
        runs = bud_ecosystem_client.list_runs_by_agent_id(agent_id=agent_id, page=page, limit=limit)
    return ResponseBase[List[data_schemas.Run]](
        data=[data_schemas.Run(**run) for run in runs]
    )


@router.get("/{session_id}", response_model=ResponseBase[data_schemas.Run])
def read_run_by_id(
    session_id: UUID4,
    # service: manager.RunCRUD = Depends(manager.get_run_crud),
) -> ResponseBase[data_schemas.Run] | dict:
    # run = service.get(id=session_id)
    run = bud_ecosystem_client.list_agent_by_session_id(session_id)
    return ResponseBase[data_schemas.Run](data=data_schemas.Run(**run))


@router.delete("/{session_id}", response_model=ResponseBase[data_schemas.Run])
def delete_run(
    session_id: UUID4,
    # service: manager.RunCRUD = Depends(manager.get_run_crud),
) -> ResponseBase[None] | dict:
    # run = service.get(id=session_id)
    run = bud_ecosystem_client.list_agent_by_session_id(session_id)
    if run["status"] in ["Running"]:
        raise CustomHttpException(
            status_code=422,
            detail=f"Only stopped runs can be deleted",
        )
    else:
        # service.delete(id=session_id)
        bud_ecosystem_client.delete_runs(session_id)

    return ResponseBase[None](
        message="Successfully deleted", meta={"session_id": session_id}, data=None
    )
