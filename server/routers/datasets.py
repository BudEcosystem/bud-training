from typing import List
from pydantic.types import UUID4
from fastapi import APIRouter, Depends, HTTPException

from ..commons import ResponseBase
from ..dependencies import validate_token_header, get_dataset_crud, psql_crud
from modules.handles.postgres import schemas


router = APIRouter(
    prefix="/dataset",
    tags=["datasets"],
    dependencies=[Depends(validate_token_header)],
    responses={404: {"description": "Not found"}},
)


@router.post("/", response_model=ResponseBase[schemas.Dataset])
def add_dataset(dataset: schemas.DatasetCreate, service: psql_crud.DatasetCRUD = Depends(get_dataset_crud)) -> ResponseBase[schemas.Dataset] | dict:
    dataset = service.create(dataset)
    return ResponseBase[schemas.Dataset](data=dataset)


@router.get("/", response_model=ResponseBase[List[schemas.Dataset]])
def read_datasets(dataset_type: int = None, page: int = 1, limit: int = 100, service: psql_crud.DatasetCRUD = Depends(get_dataset_crud)) -> ResponseBase[List[schemas.Dataset]] | dict:
    if dataset_type is None:
        datasets = service.list(page=page, limit=limit)
    else:
        datasets = service.get_dataset_by_type(dataset_type=dataset_type, page=page, limit=limit)
    return ResponseBase[List[schemas.Dataset]](data=datasets)


@router.get("/{dataset_id}", response_model=ResponseBase[schemas.Dataset])
def read_dataset_by_id(dataset_id: UUID4, service: psql_crud.DatasetCRUD = Depends(get_dataset_crud)) -> ResponseBase[schemas.Dataset] | dict:
    dataset = service.get(id=dataset_id)
    return ResponseBase[schemas.Dataset](data=dataset)


@router.put("/{dataset_id}", response_model=ResponseBase[schemas.Dataset])
def edit_dataset(dataset_id: UUID4, dataset: schemas.DatasetUpdate, service: psql_crud.DatasetCRUD = Depends(get_dataset_crud)) -> ResponseBase[schemas.Dataset] | dict:
    dataset = service.update(id=dataset_id, obj=dataset)
    return ResponseBase[schemas.Dataset](data=dataset)


@router.delete("/{dataset_id}", response_model=ResponseBase[None])
def delete_dataset(dataset_id: UUID4, service: psql_crud.DatasetCRUD = Depends(get_dataset_crud)) -> ResponseBase[None] | dict:
    service.delete(id=dataset_id)
    return ResponseBase[None](message="Successfully deleted", meta={"dataset_id": dataset_id}, data=None)