from typing import List
from pydantic.types import UUID4
from fastapi import APIRouter, Depends, File, UploadFile
from fastapi.responses import HTMLResponse

from ..models import ResponseBase
from ..dependencies import validate_token_header, get_dataset_crud, psql_crud
from modules.handles.postgres import schemas as psql_schemas
from .. import helpers
from .. import logger


router = APIRouter(
    prefix="/dataset",
    tags=["datasets"],
    dependencies=[Depends(validate_token_header)],
    responses={404: {"description": "Not found"}},
)


@router.post("/", response_model=ResponseBase[psql_schemas.Dataset])
def add_dataset(
    dataset: psql_schemas.DatasetCreate = Depends(),
    metadata_file: UploadFile | None = File(None),
    archive_file: UploadFile | None = File(None),
    service: psql_crud.DatasetCRUD = Depends(get_dataset_crud),
) -> ResponseBase[psql_schemas.Dataset] | dict:
    dataset_id = helpers.save_datasets_to_filesystem(
        source_type=dataset.source_type,
        dataset_type=dataset.type,
        source=dataset.source,
        metadata_file=metadata_file,
        archive_file=archive_file,
    )
    dataset = service.create(dataset, dataset_id=dataset_id)
    return ResponseBase[psql_schemas.Dataset](data=dataset)


@router.get("/", response_model=ResponseBase[List[psql_schemas.Dataset]])
def read_datasets(
    dataset_type: int = None,
    page: int = 1,
    limit: int = 100,
    service: psql_crud.DatasetCRUD = Depends(get_dataset_crud),
) -> ResponseBase[List[psql_schemas.Dataset]] | dict:
    if dataset_type is None:
        datasets = service.list(page=page, limit=limit)
    else:
        datasets = service.get_dataset_by_type(
            dataset_type=dataset_type, page=page, limit=limit
        )
    return ResponseBase[List[psql_schemas.Dataset]](data=datasets)


@router.get("/{dataset_id}", response_model=ResponseBase[psql_schemas.Dataset])
def read_dataset_by_id(
    dataset_id: UUID4, service: psql_crud.DatasetCRUD = Depends(get_dataset_crud)
) -> ResponseBase[psql_schemas.Dataset] | dict:
    dataset = service.get(id=dataset_id)
    return ResponseBase[psql_schemas.Dataset](data=dataset)


@router.put("/{dataset_id}", response_model=ResponseBase[psql_schemas.Dataset])
def edit_dataset(
    dataset_id: UUID4,
    dataset: psql_schemas.DatasetUpdate,
    service: psql_crud.DatasetCRUD = Depends(get_dataset_crud),
) -> ResponseBase[psql_schemas.Dataset] | dict:
    dataset = service.update(id=dataset_id, obj=dataset)
    return ResponseBase[psql_schemas.Dataset](data=dataset)


@router.delete("/{dataset_id}", response_model=ResponseBase[None])
def delete_dataset(
    dataset_id: UUID4, service: psql_crud.DatasetCRUD = Depends(get_dataset_crud)
) -> ResponseBase[None] | dict:
    service.delete(id=dataset_id)
    return ResponseBase[None](
        message="Successfully deleted", meta={"dataset_id": dataset_id}, data=None
    )
