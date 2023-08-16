from pathlib import Path

from .conf import settings, ROOT_PATH, CONSTANTS
from utils.factory import NestedNamespace


settings = NestedNamespace(settings)
PSQL_TABLE_ALIAS = settings.database.psql.TABLE_ALIAS
PSQL_CONSTANTS = CONSTANTS.get("postgres", {})


Path(settings.LOG_DIR).mkdir(exist_ok=True, parents=True)
Path(settings.DATA_DIR).mkdir(exist_ok=True, parents=True)
Path(settings.MODEL_DIR).mkdir(exist_ok=True, parents=True)
Path(settings.TRAIN_DIR).mkdir(exist_ok=True, parents=True)
Path(settings.CACHE_DIR).mkdir(exist_ok=True, parents=True)
