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
