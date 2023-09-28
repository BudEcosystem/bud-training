from typing import Tuple
from os import path as osp
from pathlib import Path
from uuid import uuid4
from datasets import load_dataset
from huggingface_hub import HfApi
from huggingface_hub import DatasetFilter
from fastapi import UploadFile, HTTPException
import shutil
import zipfile
import json
import boto3

from ..helpers import logger
from utils.exceptions import CustomHttpException
from config import settings


def is_valid_hf_dataset(dataset_id: str):
    if not dataset_id:
        raise CustomHttpException(
            status_code=422,
            detail=f"dataset source can't be empty for Hugging Face datasets",
        )

    try:
        load_dataset(dataset_id, streaming=True)
    except FileNotFoundError:
        raise CustomHttpException(
            status_code=422,
            detail=f"Couldn't find '{dataset_id}' on the Hugging Face Hub. Either the dataset doesn't exist on the hub or the repo is private or gated.",
        )


def does_dataset_exist_in_hf_hub(dataset_id: str):
    hf_api = HfApi()
    dataset = hf_api.list_datasets(filter=DatasetFilter(dataset_name=dataset_id))
    if not len(dataset):
        raise CustomHttpException(
            status_code=422,
            detail=f"Couldn't find '{dataset_id}' on the Hugging Face Hub. Either the dataset doesn't exist on the hub or the repo is private or gated.",
        )


def load_metadata(metadata_path):
    if not osp.isfile(metadata_path):
        metadata_path = osp.join(metadata_path, "metadata.jsonl")
    if not osp.isfile(metadata_path):
        raise FileNotFoundError(f"'metadata.jsonl' file missing in '{metadata_path}'")

    with open(metadata_path, "r") as file:
        ext = osp.splitext(metadata_path)[-1]
        if ext == ".json":
            metadata = json.load(file)
        elif ext in [".jsonl", ".txt"]:
            lines = file.read().splitlines()
            metadata = [json.loads(line) for line in lines]
    return metadata


def save_as_metadata(metadata, save_path):
    Path(osp.dirname(save_path)).mkdir(exist_ok=True, parents=True)
    with open(save_path, "w") as f:
        if save_path.endswith(".jsonl"):
            for entry in metadata:
                json.dump(entry, f)
                f.write("\n")
        elif save_path.endswith(".json"):
            json.dump(metadata, f)
        elif save_path.endswith(".txt"):
            f.write("\n".join(metadata) if isinstance(metadata, list) else metadata)
        else:
            raise NotImplementedError(f"{Path(save_path).suffix} is not supported")


def save_file_obj_to_filesystem(file: UploadFile, filepath: str) -> Path:
    try:
        filepath = osp.join(settings.DATA_DIR, filepath)
        Path(osp.dirname(filepath)).mkdir(exist_ok=True, parents=True)
        with open(filepath, "wb+") as file_object:
            shutil.copyfileobj(file.file, file_object)
    finally:
        file.file.close()

    if not osp.isfile(filepath):
        raise FileNotFoundError("File saving failed")

    logger.info(f"Succesffully saved the file {file.filename} to {filepath}")
    return Path(filepath)

def save_file_obj_to_s3(file: UploadFile, s3_key: str) -> str:
    bucket_name = 'bud-data-analysis'
    AWS_ACCESS_KEY_ID = 'AKIA4CKBAUIL4FVJVYQC'
    AWS_SECRET_ACCESS_KEY = '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'
    s3_key = ''
    try:
        # Initialize an S3 client
        s3 = boto3.client(
            's3',
            aws_access_key_id=AWS_ACCESS_KEY_ID,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY
        )

        # Upload the file to S3
        s3.upload_fileobj(file.file, bucket_name, s3_key)

        # Close the file-like object
        file.file.close()

        # Construct the S3 URL for the uploaded file
        s3_url = f"https://{bucket_name}.s3.amazonaws.com/{s3_key}"

        return s3_url
    except NoCredentialsError:
        raise Exception("AWS credentials not found")
    except Exception as e:
        raise Exception(f"An error occurred: {e}")


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

    dataset_id = dataset_id or uuid4()
    dataset_id = str(dataset_id)

    filename = f"metadata.{suffix}"
    return dataset_id, save_file_obj_to_filesystem(file, osp.join(dataset_id, filename))


def save_image_archive_to_filesystem(
    file: UploadFile, dataset_id: str | None = None
) -> Tuple[str, Path]:
    if not file:
        raise HTTPException(
            status_code=400, detail="Image archive file is either corrupted or empty"
        )

    dataset_id = dataset_id or uuid4()
    dataset_id = str(dataset_id)

    suffix = Path(file.filename).suffix.lstrip(".")
    if suffix not in ["zip"]:
        delete_dataset_from_filesystem(dataset_id)
        raise HTTPException(
            status_code=415,
            detail="Only '.zip' format archives are supported for image files",
        )

    filename = f"images.{suffix}"
    return dataset_id, save_file_obj_to_filesystem(file, osp.join(dataset_id, filename))


def save_datasets_to_filesystem(
    source_type: int,
    dataset_type: int,
    source: str | None = None,
    metadata_file: UploadFile | None = None,
    archive_file: UploadFile | None = None,
):
    dataset_id = None
    if source_type == 0:
        is_valid_hf_dataset(source)
    elif source_type == 1:
        dataset_id, _ = save_metadata_file_to_filesystem(metadata_file)
        if dataset_type == 1:
            save_image_archive_to_filesystem(archive_file, dataset_id)
    return dataset_id


def extract_and_process_image_archives(dataset_dir: str, image_column: str):
    dataset_dir = osp.join(settings.DATA_DIR, dataset_dir)

    if not osp.isdir(dataset_dir):
        raise FileNotFoundError(f"Couldn't locate dataset dir '{dataset_dir}'")

    if not osp.isdir(osp.join(dataset_dir, "images")):
        if not osp.isfile(osp.join(dataset_dir, "images.zip")):
            raise FileNotFoundError(
                f"Couldn't find any image archives at '{dataset_dir}'"
            )

        try:
            with zipfile.ZipFile(osp.join(dataset_dir, "images.zip"), "r") as zip_ref:
                zip_ref.extractall(osp.join(dataset_dir, "images"))
        except Exception:
            logger.critical(
                f"Couldn't extract images.zip file '{osp.join(dataset_dir, 'images.zip')}'",
                exc_info=True,
            )
            raise Exception("Couldn't extract images.zip file")

        metadata_path = None
        if osp.isfile(osp.join(dataset_dir, "metadata.jsonl")):
            metadata_path = osp.join(dataset_dir, "metadata.jsonl")
        elif osp.isfile(osp.join(dataset_dir, "metadata.json")):
            metadata_path = osp.join(dataset_dir, "metadata.json")
        else:
            raise FileNotFoundError(
                f"Couldn't find any metadata file at '{metadata_path}'"
            )

        shutil.copyfile(
            metadata_path,
            osp.join(dataset_dir, f"metadata_copy{Path(metadata_path).suffix}"),
        )
        metadata = load_metadata(metadata_path)
        for data in metadata:
            if image_column not in data:
                raise ValueError(f"Image column '{image_column}' missing in {data}")
            data[image_column] = osp.join(dataset_dir, "images", data[image_column])

        save_as_metadata(metadata, metadata_path)


def delete_dataset_from_filesystem(dirname: str):
    dirpath = osp.join(settings.DATA_DIR, dirname)
    if osp.isdir(dirpath):
        try:
            shutil.rmtree(dirpath)
        except Exception:
            logger.warning("Folder delete failed", exc_info=True)
