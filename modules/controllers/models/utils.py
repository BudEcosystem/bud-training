import requests

from typing import Tuple
from pathlib import Path
from uuid import uuid4

from fastapi import  HTTPException

from modules.handles.postgres import validations as psql_validations
from modules.controllers.datasets import utils
from config import settings

import os
import shutil

from utils.exceptions import CustomHttpException

import subprocess, socket

def validate_model_path(model_path: str) -> bool:
    if not model_path:
        raise CustomHttpException(
            status_code=422,
            detail=f"dataset source can't be empty for Hugging Face model",
        )
    url = f"https://huggingface.co/{model_path}/resolve/main/.gitattributes"
    response = requests.head(url)
    if response.status_code == 200:
        return True
    else:
        raise CustomHttpException(
            status_code=422,
            detail=f"Couldn't find '{model_path}' on the Hugging Face Hub. Either the model doesn't exist on the hub or the repo is private or gated.",
        )
    

def save_model_to_filesystem(
    model_path: str, dataset_id: str | None = None
) -> Tuple[str, Path]:

    if not os.path.exists(model_path):
        raise HTTPException(
            status_code=400, detail=f"The path {model_path} does not exist."
        )
    if not os.path.isdir(model_path):
        raise HTTPException(
            status_code=400, detail=f"The path {model_path} is not a directory."
        )

    model_id = dataset_id or str(uuid4())
    dest_path = os.path.join(settings.MODEL_DIR, model_id)

    if not os.path.exists(dest_path):
        os.makedirs(dest_path)
    for item in os.listdir(model_path):
        src_item_path = os.path.join(model_path, item)
        dest_item_path = os.path.join(dest_path, item)

        if os.path.isfile(src_item_path):
            shutil.copy2(src_item_path, dest_item_path)
        elif os.path.isdir(src_item_path):
            shutil.copytree(src_item_path, dest_item_path)

    return model_id

def save_models_to_filesystem(
    source_type: int,
    source: str | None = None,):
    model_id = None
    if utils.is_dataset_source_type_huggingface(source_type):
        validate_model_path(source)
    elif utils.is_dataset_source_type_local_upload(source_type):
        model_id = save_model_to_filesystem(source)
        
    return model_id

def delete_model_path(model_id: str):
    path = os.path.join(settings.MODEL_DIR, str(model_id))
    if os.path.exists(path):
        shutil.rmtree(path)
    return True
