from typing import List
from pydantic.types import UUID4
from fastapi import APIRouter, Depends, File, UploadFile, Form
from fastapi.responses import HTMLResponse

from ..schemas import ResponseBase
from ..dependencies import validate_token_header, get_model_crud, psql_crud
from modules.handles.postgres import schemas as psql_schemas
from modules.models import utils
from .. import logger


router = APIRouter(
    prefix="/models",
    tags=["models"],
    dependencies=[Depends(validate_token_header)],
    responses={404: {"description": "Not found"}},
)

@router.post("/", response_model=ResponseBase[psql_schemas.Model])
def add_model(
    name: str = Form(...), source: str = Form(...), type: int = Form(...),source_type: int = Form(...),
    service: psql_crud.ModelCRUD = Depends(get_model_crud),
) -> ResponseBase[psql_schemas.Model] | dict:
    model = psql_schemas.ModelCreate(name=name,source=source,type=type, source_type=source_type)
    service.does_name_exists(model)
    model_id = utils.save_models_to_filesystem(
        source_type=source_type,
        source=source
    )
    model = service.create(model, model_id=model_id)
    return ResponseBase[psql_schemas.Model](data=model)
