from .node_schemas import PipelinesCreate
from config import settings


settings.pipelines.AVAILABLE_PIPELINES = PipelinesCreate().pipelines
