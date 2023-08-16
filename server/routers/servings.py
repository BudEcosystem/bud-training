from typing import List
from pydantic.types import UUID4
from fastapi import APIRouter, Depends, Form

from ..schemas import ResponseBase
from ..dependencies import validate_token_header
from modules.controllers.models import  manager as model_manager
from modules.controllers.servings import schemas, manager, utils
from datetime import datetime, timezone

from uuid import uuid4
from config import settings
from utils.exceptions import CustomHttpException

from workers import celery_worker

router = APIRouter(
    prefix="/inference",
    tags=["inference"],
    dependencies=[Depends(validate_token_header)],
    responses={404: {"description": "Not found"}},
)

@router.post("/create", response_model=ResponseBase[schemas.ServingHistory])
def inference(model_id: UUID4 = Form(...),
              service: manager.ServingCRUD = Depends(manager.get_serving_crud),
              service_manger: model_manager.ModelCRUD = Depends(model_manager.get_model_crud)
) -> ResponseBase[schemas.ServingHistory] | dict:
    
    model = service_manger.get(id=model_id)
    base_model=None

    if model.base_model_id:
        base_model = service_manger.get(id=model.base_model_id)
    serving_id=str(uuid4())
    port = utils.find_available_port()
    endpoint = settings.SD_ENDPOINT+":"+str(port)
    serving = schemas.Serving(
        serving_id = serving_id, model_id=model_id,endpoint=endpoint,
        status=1, started_at=datetime.now(timezone.utc)
    )
    serving = service.create(serving, serving_id=None)
    utils.run_inference(serving_id,port,model,base_model)
    
    return ResponseBase[schemas.ServingHistory](data=schemas.ServingHistory.from_orm(serving))


@router.get("/", response_model=ResponseBase[List[schemas.ServingHistory]])
def list_inferences(
    page: int = 1,
    limit: int = 100,
    service: manager.ServingCRUD = Depends(manager.get_serving_crud),
) -> ResponseBase[List[schemas.ServingHistory]] | dict:
    serving = service.list(page=page, limit=limit)
    return ResponseBase[List[schemas.ServingHistory]](
        data=[schemas.ServingHistory.from_orm(model) for model in serving]
    )

@router.post("/stop/{serving_id}", response_model=ResponseBase[schemas.ServingHistory])
def stop_inference(
    serving_id: UUID4,
    service: manager.ServingCRUD = Depends(manager.get_serving_crud),
) -> ResponseBase[schemas.ServingHistory] | dict:
    serving = service.get(id=serving_id)
    serving.status=0
    serving.stopped_at=datetime.now(timezone.utc)
    celery_worker.revoke_task(str(serving_id))
    serving = service.update(id=serving_id, obj=schemas.ServingHistory.from_orm(serving))
    return ResponseBase[schemas.ServingHistory](data=schemas.ServingHistory.from_orm(serving))

@router.post("/start/{serving_id}", response_model=ResponseBase[schemas.ServingHistory])
def start_inference(
    serving_id: UUID4,
    service: manager.ServingCRUD = Depends(manager.get_serving_crud),
    service_manger: model_manager.ModelCRUD = Depends(model_manager.get_model_crud)
) -> ResponseBase[schemas.ServingHistory] | dict:
    
    serving = service.get(id=serving_id)
    serving.started_at=datetime.now(timezone.utc)
    if serving.status == 1:
        raise CustomHttpException(
            status_code=422,
            detail=f"Inference already running",
        )
    model = service_manger.get(id=serving.model_id)
    base_model=None
    if model.base_model_id:
        base_model = service_manger.get(id=model.base_model_id)
    port = utils.find_available_port()
    serving.endpoint = settings.SD_ENDPOINT+":"+str(port)
    serving = schemas.ServingStatus(status=0)
    serving.status=1
    serving = service.update(id=serving_id, obj=serving)
    utils.run_inference(str(serving_id),port,model,base_model)
    return ResponseBase[schemas.ServingHistory](data=schemas.ServingHistory.from_orm(serving))

@router.delete("/delete/{serving_id}", response_model=ResponseBase[schemas.ServingHistory])
def delete_inference(
    serving_id: UUID4,
    service: manager.ServingCRUD = Depends(manager.get_serving_crud),
) -> ResponseBase[None] | dict:
    
    serving = service.get(id=serving_id)
    if serving.status == 1:
        raise CustomHttpException(
            status_code=422,
            detail=f"Running inferences cannot be deleted",
        )
    else:
        service.delete(id=serving_id)
    
    return ResponseBase[None](
            message="Successfully deleted", meta={"serving_id": serving_id}, data=None
        )