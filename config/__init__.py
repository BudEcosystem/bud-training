from pathlib import Path

from .conf import settings


Path(settings.LOG_DIR).mkdir(exist_ok=True, parents=True)
Path(settings.DATA_DIR).mkdir(exist_ok=True, parents=True)
Path(settings.MODEL_DIR).mkdir(exist_ok=True, parents=True)
Path(settings.TRAIN_DIR).mkdir(exist_ok=True, parents=True)
Path(settings.CACHE_DIR).mkdir(exist_ok=True, parents=True)
