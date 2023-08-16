from typing import List
from pydantic.types import UUID4
from fastapi import APIRouter, Depends, File, UploadFile

from ..schemas import ResponseBase
from ..dependencies import (
    validate_token_header,
)
from modules.controllers.datasets import schemas as dataset_schemas
from modules.controllers.datasets import manager
from modules.controllers.datasets import utils
from .. import logger


router = APIRouter(
    prefix="/dataset",
    tags=["datasets"],
    dependencies=[Depends(validate_token_header)],
    responses={404: {"description": "Not found"}},
)


@router.post("/", response_model=ResponseBase[dataset_schemas.Dataset])
def add_dataset(
    dataset: dataset_schemas.DatasetCreate = Depends(),
    metadata_file: UploadFile | None = File(None),
    archive_file: UploadFile | None = File(None),
    service: manager.DatasetCRUD = Depends(manager.get_dataset_crud),
) -> ResponseBase[dataset_schemas.Dataset] | dict:
    service.assert_is_name_unique(dataset.name)
    dataset_id = utils.save_datasets_to_filesystem(
        source_type=dataset.source_type,
        dataset_type=dataset.type,
        source=dataset.source,
        metadata_file=metadata_file,
        archive_file=archive_file,
    )
    dataset = service.create(dataset, dataset_id=dataset_id)
    return ResponseBase[dataset_schemas.Dataset](
        data=dataset_schemas.Dataset.from_orm(dataset)
    )


@router.get("/", response_model=ResponseBase[List[dataset_schemas.Dataset]])
def read_datasets(
    dataset_type: int = None,
    page: int = 1,
    limit: int = 100,
    service: manager.DatasetCRUD = Depends(manager.get_dataset_crud),
) -> ResponseBase[List[dataset_schemas.Dataset]] | dict:
    if dataset_type is None:
        datasets = service.list(page=page, limit=limit)
    else:
        datasets = service.get_dataset_by_type(
            dataset_type=dataset_type, page=page, limit=limit
        )
    return ResponseBase[List[dataset_schemas.Dataset]](
        data=[dataset_schemas.Dataset.from_orm(dataset) for dataset in datasets]
    )


@router.get("/{dataset_id}", response_model=ResponseBase[dataset_schemas.Dataset])
def read_dataset_by_id(
    dataset_id: UUID4, service: manager.DatasetCRUD = Depends(manager.get_dataset_crud)
) -> ResponseBase[dataset_schemas.Dataset] | dict:
    dataset = service.get(id=dataset_id)
    return ResponseBase[dataset_schemas.Dataset](
        data=dataset_schemas.Dataset.from_orm(dataset)
    )


@router.put("/{dataset_id}", response_model=ResponseBase[dataset_schemas.Dataset])
def edit_dataset(
    dataset_id: UUID4,
    dataset: dataset_schemas.DatasetUpdate,
    service: manager.DatasetCRUD = Depends(manager.get_dataset_crud),
) -> ResponseBase[dataset_schemas.Dataset] | dict:
    service.assert_is_name_unique(dataset.name)
    dataset = service.update(id=dataset_id, obj=dataset)
    return ResponseBase[dataset_schemas.Dataset](
        data=dataset_schemas.Dataset.from_orm(dataset)
    )


@router.delete("/{dataset_id}", response_model=ResponseBase[None])
def delete_dataset(
    dataset_id: UUID4, service: manager.DatasetCRUD = Depends(manager.get_dataset_crud)
) -> ResponseBase[None] | dict:
    service.delete(id=dataset_id)
    utils.delete_dataset_from_filesystem(str(dataset_id))
    return ResponseBase[None](
        message="Successfully deleted", meta={"dataset_id": dataset_id}, data=None
    )
