from .loggers import get_logger, init_loggers

init_loggers()

logger = get_logger("module_log")
logger.debug("Initialized all logger objects !!!")
