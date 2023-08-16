from os import path as osp
from environs import Env


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
        "psql": {"URL": env.str("PSQL_URL")},
        "redis": {"URL": env.str("REDIS_URL")},
    },
    "pipelines": {},
    "PYTHON_ENV": env.str("PYTHON_ENV")
}
