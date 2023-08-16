from typing import List
from pydantic.types import UUID4
from fastapi import APIRouter, Depends, Form

from ..schemas import ResponseBase
from ..dependencies import validate_token_header, get_model_crud, psql_crud
from modules.handles.postgres import schemas as psql_schemas
from modules.model_module import utils

router = APIRouter(
    prefix="/models",
    tags=["models"],
    dependencies=[Depends(validate_token_header)],
    responses={404: {"description": "Not found"}},
)


@router.post("/", response_model=ResponseBase[psql_schemas.Model])
def add_model(
    name: str = Form(...),
    source: str = Form(...),
    type: int = Form(...),
    source_type: int = Form(...),
    service: psql_crud.ModelCRUD = Depends(get_model_crud),
) -> ResponseBase[psql_schemas.Model] | dict:
    model = psql_schemas.ModelCreate(
        name=name, source=source, type=type, source_type=source_type
    )
    service.does_name_exists(model)
    model_id = utils.save_models_to_filesystem(source_type=source_type, source=source)
    model = service.create(model, model_id=model_id)
    return ResponseBase[psql_schemas.Model](data=psql_schemas.Model.from_orm(model))


@router.get("/", response_model=ResponseBase[List[psql_schemas.Model]])
def read_datasets(
    page: int = 1,
    limit: int = 100,
    service: psql_crud.DatasetCRUD = Depends(get_model_crud),
) -> ResponseBase[List[psql_schemas.Model]] | dict:
    models = service.list(page=page, limit=limit)
    return ResponseBase[List[psql_schemas.Model]](
                data=[psql_schemas.Model.from_orm(model) for model in models])


@router.get("/{model_id}", response_model=ResponseBase[psql_schemas.Model])
def read_dataset_by_id(
    model_id: UUID4, service: psql_crud.ModelCRUD = Depends(get_model_crud)
) -> ResponseBase[psql_schemas.Model] | dict:
    model = service.get(id=model_id)
    return ResponseBase[psql_schemas.Model](data=psql_schemas.Model.from_orm(model))


@router.put("/{model_id}", response_model=ResponseBase[psql_schemas.Model])
def edit_dataset(
    model_id: UUID4,
    name: str = Form(...),
    service: psql_crud.DatasetCRUD = Depends(get_model_crud),
) -> ResponseBase[psql_schemas.Dataset] | dict:
    model = psql_schemas.ModelUpdate(name=name)
    service.does_name_exists(model)
    model = service.update(id=model_id, obj=model)
    return ResponseBase[psql_schemas.Model](data=psql_schemas.Model.from_orm(model))


@router.delete("/{model_id}", response_model=ResponseBase[None])
def delete_dataset(
    model_id: UUID4, service: psql_crud.ModelCRUD = Depends(get_model_crud)
) -> ResponseBase[None] | dict:
    service.delete(id=model_id)
    utils.delete_model_path(model_id=model_id)
    return ResponseBase[None](
        message="Successfully deleted", meta={"dataset_id": model_id}, data=None
    )
