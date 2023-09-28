from typing import List
from os import path as osp

from pydantic.types import UUID4
from fastapi import APIRouter, Depends, File, UploadFile, Form
from fastapi.responses import JSONResponse, StreamingResponse
from fastapi.exceptions import HTTPException

from ..schemas import ResponseBase
from ..dependencies import (
    validate_token_header,
)
from .. import logger
from modules.controllers.datasets import schemas as dataset_schemas
from modules.controllers.datasets import manager
from modules.controllers.datasets import utils
from utils.fileio import create_zipfile_buffer_from_dir
from config import settings


router = APIRouter(
    prefix="/dataset",
    tags=["datasets"],
    dependencies=[Depends(validate_token_header)],
)


@router.post("/", response_model=ResponseBase[dataset_schemas.Dataset])
def add_dataset(
    # dataset: dataset_schemas.DatasetCreate = Depends(),
    name: str = Form(...),
    source: str | None = Form(None),
    source_type: int = Form(...),
    _type: int = Form(..., alias="type"),
    metadata_file: UploadFile | None = File(None),
    archive_file: UploadFile | None = File(None),
    service: manager.DatasetCRUD = Depends(manager.get_dataset_crud),
) -> ResponseBase[dataset_schemas.Dataset] | dict:
    dataset = dataset_schemas.DatasetCreate(
        name=name, source=source, source_type=source_type, type=_type
    )
    service.assert_is_name_unique(dataset.name)
    # dataset_id = utils.save_datasets_to_filesystem(
    #     source_type=dataset.source_type,
    #     dataset_type=dataset.type,
    #     source=dataset.source,
    #     metadata_file=metadata_file,
    #     archive_file=archive_file,
    # )
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
    dataset_name: str = None,
    page: int = 1,
    limit: int = 100,
    service: manager.DatasetCRUD = Depends(manager.get_dataset_crud),
) -> ResponseBase[List[dataset_schemas.Dataset]] | dict:
    if dataset_type is not None:
        datasets = service.get_dataset_by_type(
            dataset_type=dataset_type, page=page, limit=limit
        )
    elif dataset_name is not None:
        datasets = service.get_dataset_by_name(dataset_name=dataset_name)
        if datasets is not None:
            datasets = [datasets]
        else:
            datasets = []
    else:
        datasets = service.list(page=page, limit=limit)
    logger.info(datasets)
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


@router.api_route(
    "/download/{dataset_id}", methods=["GET", "HEAD"], response_model=ResponseBase[None]
)
def download_dataset(
    dataset_id: UUID4, service: manager.DatasetCRUD = Depends(manager.get_dataset_crud)
):
    dataset = service.get(id=dataset_id)
    if dataset.source_type == 0:
        return JSONResponse(
            status_code=204,
            content={
                "message": "Dataset is from external download source",
                "success": False,
            },
        )
    if not osp.isdir(osp.join(settings.DATA_DIR, str(dataset_id))):
        raise HTTPException(
            status_code=404, detail="Couldn't locate the dataset file/folder"
        )

    zip_bytes_io = create_zipfile_buffer_from_dir(
        osp.join(settings.DATA_DIR, str(dataset_id))
    )

    response = StreamingResponse(
        iter([zip_bytes_io.getvalue()]),
        media_type="application/x-zip-compressed",
        headers={
            "Content-Disposition": f"attachment;filename={str(dataset_id)}.zip",
            "Content-Length": str(zip_bytes_io.getbuffer().nbytes),
            "access-control-expose-headers": (
                "content-type, content-length, content-encoding"
            ),
        },
        status_code=206,
    )
    return response
