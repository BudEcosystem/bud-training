from functools import lru_cache
from os import path as osp
import yaml
import time

from utils.loggers import get_logger

logger = get_logger("module_log")


dirpath = osp.dirname(osp.realpath(__file__))


@lru_cache
def load_constants(config_path=None):
    now = time.time()
    if not config_path:
        config_path = osp.join(dirpath, "config", "constants.yaml")
    constants = {}

    if osp.isfile(config_path):
        with open(config_path, "r") as file:
            data = yaml.safe_load(file)

        for entry in data["constants"]:
            constants[entry["table_name"]] = entry

    logger.debug(f"Constants read time -> {time.time()-now}s")
    return constants


CONSTANTS = load_constants()

TABLE_ALIAS = {
    "Dataset": "datasets",
    "Model": "models",
    "Pipeline": "pipelines",
    "Run": "runs",
    "Run and Model": "runs_n_models",
    "Serving": "servings",
    "Serving History": "serving_history",
}
