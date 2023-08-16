from typing import List
from pydantic.types import UUID4
from fastapi import APIRouter, Depends, Form

from ..schemas import ResponseBase
from ..dependencies import validate_token_header
from modules.controllers.models import schemas, manager, utils
router = APIRouter(
    prefix="/models",
    tags=["models"],
    dependencies=[Depends(validate_token_header)],
    responses={404: {"description": "Not found"}},
)

@router.post("/", response_model=ResponseBase[schemas.Model])
def add_model(
    name: str = Form(...),
    source: str = Form(...),
    type: int = Form(...),
    source_type: int = Form(...),
    family: int = Form(...),
    base_model_id: UUID4 = Form(None),
    service: manager.ModelCRUD = Depends(manager.get_model_crud),
) -> ResponseBase[schemas.Model] | dict:
    model = schemas.ModelCreate(
        name=name, source=source, type=type, source_type=source_type, family=family, base_model_id=base_model_id
    )
    service.does_name_exists(model)
    model_id = utils.save_models_to_filesystem(source_type=source_type, source=source)
    model = service.create(model, model_id=model_id)
    return ResponseBase[schemas.Model](data=schemas.Model.from_orm(model))


@router.get("/", response_model=ResponseBase[List[schemas.Model]])
def read_datasets(
    page: int = 1,
    limit: int = 100,
    service: manager.ModelCRUD = Depends(manager.get_model_crud),
) -> ResponseBase[List[schemas.Model]] | dict:
    models = service.list(page=page, limit=limit)
    return ResponseBase[List[schemas.Model]](
        data=[schemas.Model.from_orm(model) for model in models]
    )


@router.get("/{model_id}", response_model=ResponseBase[schemas.Model])
def read_dataset_by_id(
    model_id: UUID4, service: manager.ModelCRUD = Depends(manager.get_model_crud)
) -> ResponseBase[schemas.Model] | dict:
    model = service.get(id=model_id)
    return ResponseBase[schemas.Model](data=schemas.Model.from_orm(model))


@router.put("/{model_id}", response_model=ResponseBase[schemas.Model])
def edit_dataset(
    model_id: UUID4,
    name: str = Form(...),
    service: manager.ModelCRUD = Depends(manager.get_model_crud),
) -> ResponseBase[schemas.Model] | dict:
    model = schemas.ModelUpdate(name=name)
    service.does_name_exists(model)
    model = service.update(id=model_id, obj=model)
    return ResponseBase[schemas.Model](data=schemas.Model.from_orm(model))


@router.delete("/{model_id}", response_model=ResponseBase[None])
def delete_dataset(
    model_id: UUID4, service: manager.ModelCRUD = Depends(manager.get_model_crud)
) -> ResponseBase[None] | dict:
    service.delete(id=model_id)
    utils.delete_model_path(model_id=model_id)
    return ResponseBase[None](
        message="Successfully deleted", meta={"dataset_id": model_id}, data=None
    )