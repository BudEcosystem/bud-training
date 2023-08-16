from typing import List
from fastapi import APIRouter, Depends

from ..schemas import ResponseBase
from ..dependencies import (
    validate_token_header,
)
from modules.handles.postgres import schemas as psql_schemas
from modules.controllers.pipelines.schemas import NodeCategory
from modules.controllers.pipelines import AVAILABLE_PIPELINES


router = APIRouter(
    prefix="/pipeline",
    tags=["pipelines"],
    dependencies=[Depends(validate_token_header)],
    responses={404: {"description": "Not found"}},
)


@router.get("/config", response_model=ResponseBase[List[NodeCategory]])
def read_pipeline_config() -> ResponseBase[List[NodeCategory]] | dict:
    return ResponseBase[List[NodeCategory]](data=AVAILABLE_PIPELINES)
