from functools import lru_cache
from os import path as osp
from pathlib import Path
import yaml

from .conf import settings, ROOT_PATH
from utils.factory import NestedNamespace


@lru_cache
def load_constants(config_path: str | None = None):
    if not config_path:
        config_path = osp.join(ROOT_PATH, "config", "constants.yaml")
    constants = {}

    if osp.isfile(config_path):
        with open(config_path, "r") as file:
            data = yaml.safe_load(file)

        for key in ["postgres"]:
            constants[key] = {}
            for entry in data[key]:
                constants[key][entry["table_name"]] = entry
            del data[key]

        for key, values in data.items():
            constants[key] = values

    return constants


settings = NestedNamespace(settings)
CONSTANTS = load_constants()

Path(settings.LOG_DIR).mkdir(exist_ok=True, parents=True)
Path(settings.DATA_DIR).mkdir(exist_ok=True, parents=True)
Path(settings.MODEL_DIR).mkdir(exist_ok=True, parents=True)
Path(settings.TRAIN_DIR).mkdir(exist_ok=True, parents=True)
Path(settings.CACHE_DIR).mkdir(exist_ok=True, parents=True)
