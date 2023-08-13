from datetime import datetime
import logging
import logging.config
from os import path
from pathlib import Path

from config import settings

log_levels = {
    "DEBUG": logging.DEBUG,
    "WARNING": logging.WARNING,
    "INFO": logging.INFO,
    "ERROR": logging.ERROR,
    "CRITICAL": logging.CRITICAL,
}


class ColorFormatter(logging.Formatter):
    """Custom logging formatter with color coding"""

    dark_grey = "\x1b[1;30m"
    light_grey = "\x1b[0;37m"
    bold_yellow = "\x1b[1;33m"
    bold_red = "\x1b[1;31m"
    bold_magenta = "\x1b[1;35m"
    reset = "\x1b[0m"
    _format = "%(asctime)s - [%(threadName)-12.12s] [%(levelname)s-5.5s] -  %(name)s - (%(filename)s).%(funcName)s(%(lineno)d) - %(message)s"
    # _format = "%(asctime)s [%(threadName)-12.12s] [%(levelname)-5.5s] %(filename)s:%(lineno)d :: %(message)s"

    FORMATS = {
        logging.DEBUG: dark_grey + _format + reset,
        logging.INFO: light_grey + _format + reset,
        logging.WARNING: bold_yellow + _format + reset,
        logging.ERROR: bold_red + _format + reset,
        logging.CRITICAL: bold_magenta + _format + reset,
    }

    def format(self, record: logging.LogRecord):
        """Apply the preset formatting to log message based on it's log level

        Args:
            record (logging.LogRecord): Log record to format

        Returns:
            str: Formatted string
        """
        formatter = logging.Formatter(self.FORMATS.get(record.levelno))
        return formatter.format(record)


def create_file_logger(
    filename: str, log_level: str = settings.LOG_LEVEL, log_dir: str = settings.LOG_DIR
):
    """Create a color formatted file logger with the given log level and filename

    Args:
        filename (str): Filename of the log file, current timestamp will be added to the filename
        log_level (str, optional): Log level to use. Defaults to settings.LOG_LEVEL.
        log_dir (str, optional): Log directory to use. Defaults to settings.LOG_DIR.

    Returns:
        logging.Logger: File logger instance with ColorFormatter
    """
    filename = f"{filename}_{datetime.utcnow().astimezone().strftime('%Y-%m-%dT%H-%M-%S')}"
    Path(log_dir).mkdir(exist_ok=True, parents=True)

    logger = logging.getLogger(filename)
    logger.setLevel(log_levels.get(log_level, logging.DEBUG))

    file_handler = logging.FileHandler(path.join(log_dir, f"{filename}.log"))
    file_handler.setFormatter(ColorFormatter())
    logger.addHandler(file_handler)

    # console_handler = logging.StreamHandler()
    # console_handler.setFormatter(ColorFormatter())
    # logger.addHandler(console_handler)
    logger.debug(f"{filename} logger initialized!!!")

    return logger


def init_loggers(log_dir: str = settings.LOG_DIR):
    """Instantiate required logging instances using the logging.ini file

    Args:
        log_dir (str, optional): Log directory to use. Defaults to settings.LOG_DIR.
    """
    Path(log_dir).mkdir(exist_ok=True, parents=True)
    print()
    logging.config.fileConfig(
        f"{path.abspath(path.join(path.dirname(__file__), '../'))}/config/logging.ini",
        disable_existing_loggers=False,
        defaults={"logdir": log_dir},
    )


def get_logger(log_name: str, log_level: str = settings.LOG_LEVEL):
    """Get app logger instance initialized using logging.ini file

    Args:
        log_name (str): Name of logger object to retrieve
        log_level (str, optional): Log level to use. Defaults to settings.LOG_LEVEL.

    Returns:
        logging.Logger: app logger instance
    """
    logger = logging.getLogger(log_name)
    logger.setLevel(log_levels.get(log_level, logging.DEBUG))
    return logger
