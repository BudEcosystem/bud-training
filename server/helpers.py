from typing import Tuple
from os import path as osp
from pathlib import Path
from uuid import uuid4

from tempfile import SpooledTemporaryFile
from fastapi import UploadFile, HTTPException

import shutil

from modules.handles.postgres import validations as psql_validations
from modules.datasets.huggingface import is_valid_dataset
from modules.model_module.utils import validate_model_path

from config import settings
from . import logger

def delete_dir_from_filesystem(file_category: str, dirname: str):
    base_dir = {"dataset": settings.DATA_DIR, "model": settings.MODEL_DIR}
    dirpath = osp.join(base_dir.get(file_category, settings.CACHE_DIR), dirname)
    if osp.isdir(dirpath):
        try:
            shutil.rmtree(dirpath)
        except Exception:
            logger.warning("Folder delete failed", exc_info=True)


def save_file_obj_to_filesystem(
    file: UploadFile, file_category: str, filepath: str
) -> Path:
    base_dir = {"dataset": settings.DATA_DIR, "model": settings.MODEL_DIR}
    try:
        filepath = osp.join(base_dir.get(file_category, settings.CACHE_DIR), filepath)
        Path(osp.dirname(filepath)).mkdir(exist_ok=True, parents=True)
        with open(filepath, "wb+") as file_object:
            shutil.copyfileobj(file.file, file_object)
    finally:
        file.file.close()

    if not osp.isfile(filepath):
        raise FileNotFoundError("File saving failed")

    logger.info(f"Succesffully saved the file {file.filename} to {filepath}")
    return Path(filepath)


def save_metadata_file_to_filesystem(
    file: UploadFile, dataset_id: str | None = None
) -> Tuple[str, Path]:
    if not file:
        raise HTTPException(
            status_code=400, detail="Metadata file is either corrupted or empty"
        )

    suffix = Path(file.filename).suffix.lstrip(".")
    if suffix not in ["jsonl", "json"]:
        raise HTTPException(
            status_code=415,
            detail="Only '.jsonl' and 'json' formats are supported for metadata/text files",
        )

    dataset_id = dataset_id or str(uuid4())

    filename = f"metadata.{suffix}"
    return dataset_id, save_file_obj_to_filesystem(
        file, "dataset", osp.join(dataset_id, filename)
    )


def save_image_archive_to_filesystem(
    file: UploadFile, dataset_id: str | None = None
) -> Tuple[str, Path]:
    if not file:
        raise HTTPException(
            status_code=400, detail="Image archive file is either corrupted or empty"
        )

    dataset_id = dataset_id or str(uuid4())
    suffix = Path(file.filename).suffix.lstrip(".")
    if suffix not in ["zip"]:
        delete_dir_from_filesystem("dataset", dataset_id)
        raise HTTPException(
            status_code=415,
            detail="Only '.zip' format archives are supported for image files",
        )

    filename = f"images.{suffix}"
    return dataset_id, save_file_obj_to_filesystem(
        file, "dataset", osp.join(dataset_id, filename)
    )


def save_datasets_to_filesystem(
    source_type: int,
    dataset_type: int,
    source: str | None = None,
    metadata_file: UploadFile | None = None,
    archive_file: UploadFile | None = None,
):
    dataset_id = None
    if psql_validations.is_dataset_source_type_huggingface(source_type):
        is_valid_dataset(source)
    elif psql_validations.is_dataset_source_type_local_upload(source_type):
        dataset_id, _ = save_metadata_file_to_filesystem(metadata_file)
        if psql_validations.is_dataset_type_text_and_image(dataset_type):
            save_image_archive_to_filesystem(archive_file, dataset_id)
    return dataset_id


