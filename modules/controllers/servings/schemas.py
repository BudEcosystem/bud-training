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
    endpoint: str
    status: int
    started_at: datetime | None = None
    stopped_at: datetime | None = None

    class Config:
        orm_mode = True

    @validator("status")
    def status_is_valid(cls, value: str) -> str:
        if not validate_constants(
            table_name=PSQL_TABLE_ALIAS.Serving_History, column_name="status", value=value
        ):
            raise CustomHttpException(
                status_code=422, detail=f"'status' doesn't support value '{value}'"
            )
        return value

class ServingHistory(BaseModel):
    serving_id: UUID4
    model_id: UUID4
    endpoint: str
    log_path: str | None = None
    status: int
    started_at: datetime | None = None
    stopped_at: datetime | None = None
    created_at: datetime
    modified_at: datetime

    class Config:
        orm_mode = True

    @root_validator
    def validate_constant_aliases(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        values["status_alias"] = str(
            get_constant_alias(
                table_name=PSQL_TABLE_ALIAS.Serving_History,
                column_name="status",
                value=values["status"],
            )
        )
        return values
