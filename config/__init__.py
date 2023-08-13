from .conf import settings
from utils.factory import NestedNamespace


settings = NestedNamespace(settings)


from utils.loggers import get_logger, init_loggers

init_loggers()

logger = get_logger("module_log")
logger.debug("Initialized all logger objects !!!")