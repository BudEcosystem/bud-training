from functools import lru_cache
from os import path as osp
from os import walk
from environs import Env
import yaml

from utils.factory import NestedNamespace


env = Env()
env.read_env()

DIR_PATH = osp.dirname(osp.realpath(__file__))
ROOT_PATH = osp.abspath(osp.join(osp.dirname(__file__), ".." + osp.sep))


@lru_cache(5)
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


def load_pipeline_configs(config_dir: str | None = None):
    config_paths = []
    if not config_dir:
        config_dir = osp.join(ROOT_PATH, "config", "pipelines")

    if not osp.isdir(config_dir):
        print(
            f"[WARNING] Config dir {config_dir} doesn't exist. Skipping pipeline configs!!!"
        )

    for dirpath, _, filenames in walk(config_dir):
        for filename in filenames:
            config_paths.append(osp.join(dirpath, filename))
    return config_paths


CONSTANTS = load_constants()
PIPELINE_CONFIGS = load_pipeline_configs()


settings = {
    "CONSTANTS": {},
    "ROOT_PATH": ROOT_PATH,
    "DEBUG": env.bool("DEBUG", False),
    "LOG_LEVEL": env.str("LOG_LEVEL", "DEBUG"),
    "LOG_DIR": env.str("LOG_DIR", osp.join(ROOT_PATH, "logs")),
    "DATA_DIR": env.str("DATA_DIR", osp.join(ROOT_PATH, "data")),
    "MODEL_DIR": env.str("MODEL_DIR", osp.join(ROOT_PATH, "models")),
    "TRAIN_DIR": env.str("TRAIN_DIR", osp.join(ROOT_PATH, "checkpoints")),
    "CACHE_DIR": env.str("CACHE_DIR", osp.join(ROOT_PATH, "cache")),
    "ALLOWED_HOSTS": [name.strip() for name in env.list("ALLOWED_HOSTS", [])],
    "ALLOWED_ORIGINS": [name.strip() for name in env.list("ALLOWED_ORIGINS", [])],
    "PYTHON_ENV": env.str("PYTHON_ENV"),
    "SD_ENDPOINT": env.str("SD_ENDPOINT").rstrip("/"),
    "auth": {
        "X_TOKEN": env.str("X_TOKEN"),
    },
    "jupyterhub": {
        "NETWORK": env.str("JUPYTERHUB_NETWORK"),
        "BASE_URL": env.str("JUPYTERHUB_BASE_URL").rstrip("/"),
        "PUBLIC_BASE_URL": env.str("JUPYTERHUB_PUBLIC_BASE_URL").rstrip("/"),
        "API_TOKEN": env.str("JUPYTERHUB_API_TOKEN"),
        "API_TIMEOUT": env.int("JUPYTERHUB_API_TIMEOUT", 120),
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
            "CONSTANTS": {},
        },
        "redis": {"URL": env.str("REDIS_URL")},
    },
    "pipelines": {
        "CONSTANTS": {},
        "CONFIGS": PIPELINE_CONFIGS,
        "AVAILABLE_PIPELINES": [],
    },
}


settings = NestedNamespace(settings)
settings.CONSTANTS = CONSTANTS
settings.database.psql.CONSTANTS = CONSTANTS.get("postgres", {})
settings.pipelines.CONSTANTS = CONSTANTS.get("pipelines", {})
