from typing import Dict, Any
from pydantic import BaseModel, validator, root_validator
from pydantic.types import UUID4
from datetime import datetime

from config import settings
from ..helpers import validate_constants, get_constant_alias
from utils.exceptions import CustomHttpException


PSQL_TABLE_ALIAS = settings.database.psql.TABLE_ALIAS


class Serving(BaseModel):
    serving_id: UUID4
    model_id: UUID4
    created_at: datetime
    modified_at: datetime

    class Config:
        orm_mode = True


class ServingHistory(BaseModel):
    serving_id: UUID4
    model_id: UUID4
    endpoint: str
    log_path: str
    status: int
    started_at: datetime
    stopped_at: datetime
    created_at: datetime
    modified_at: datetime

    class Config:
        orm_mode = True

    @root_validator
    def validate_constant_aliases(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        values["status_alias"] = str(
            get_constant_alias(
                table_name=PSQL_TABLE_ALIAS["Serving History"],
                column_name="status",
                value=values["status"],
            )
        )
        return values
