from functools import lru_cache
from os import path as osp
from environs import Env
import yaml


env = Env()
env.read_env()

DIR_PATH = osp.dirname(osp.realpath(__file__))
ROOT_PATH = osp.abspath(osp.join(osp.dirname(__file__), ".." + osp.sep))


settings = {
    "DEBUG": env.bool("DEBUG", False),
    "LOG_LEVEL": env.str("LOG_LEVEL", "DEBUG"),
    "LOG_DIR": env.str("LOG_DIR", osp.join(ROOT_PATH, "logs")),
    "DATA_DIR": env.str("DATA_DIR", osp.join(ROOT_PATH, "data")),
    "MODEL_DIR": env.str("MODEL_DIR", osp.join(ROOT_PATH, "models")),
    "TRAIN_DIR": env.str("TRAIN_DIR", osp.join(ROOT_PATH, "checkpoints")),
    "CACHE_DIR": env.str("CACHE_DIR", osp.join(ROOT_PATH, "cache")),
    "ALLOWED_HOSTS": [name.strip() for name in env.list("ALLOWED_HOSTS", [])],
    "ALLOWED_ORIGINS": [name.strip() for name in env.list("ALLOWED_ORIGINS", [])],
    "auth": {
        "X_TOKEN": env.str("X_TOKEN"),
    },
    "database": {
        "psql": {
            "URL": env.str("PSQL_URL"),
            "TABLE_ALIAS": {
                "Dataset": "datasets",
                "Model": "models",
                "Pipeline": "pipelines",
                "Node": "nodes",
                "Node_Relation": "node_relations",
                "Run": "runs",
                "Run_and_Model": "runs_n_models",
                "Serving": "servings",
                "Serving_History": "serving_history",
            },
        },
        "redis": {"URL": env.str("REDIS_URL")},
    },
    "pipelines": {},
}


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


CONSTANTS = load_constants()
