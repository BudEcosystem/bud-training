from typing import Dict, Any
from pydantic import BaseModel, validator, root_validator
from pydantic.types import UUID4
from datetime import datetime

from ..helpers import validate_constants, get_constant_alias
from utils.exceptions import CustomHttpException
from config import settings


PSQL_TABLE_ALIAS = settings.database.psql.TABLE_ALIAS


class DatasetCreate(BaseModel):
    name: str
    source: str | None = None
    source_type: int
    type: int

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "name": "Dataset XXX",
                    "source": "",
                    "source_type": 0,
                    "type": 0,
                }
            ]
        }
    }

    @validator("name")
    def name_is_valid(cls, value: str) -> str:
        if not value.strip().strip('"').strip("'"):
            raise CustomHttpException(
                status_code=422, detail=f"'name' shouldn't be empty"
            )
        return value

    @validator("source_type")
    def source_type_is_valid(cls, value: str) -> str:
        if not validate_constants(
            table_name=PSQL_TABLE_ALIAS["Dataset"],
            column_name="source_type",
            value=value,
        ):
            raise CustomHttpException(
                status_code=422, detail=f"'source_type' doesn't support value '{value}'"
            )
        return value

    @validator("type")
    def type_is_valid(cls, value: str) -> str:
        if not validate_constants(
            table_name=PSQL_TABLE_ALIAS["Dataset"], column_name="type", value=value
        ):
            raise CustomHttpException(
                status_code=422, detail=f"'type' doesn't support value '{value}'"
            )
        return value


class DatasetUpdate(BaseModel):
    name: str


class Dataset(BaseModel):
    dataset_id: UUID4
    name: str
    source: str | None = None
    source_type: int
    source_type_alias: str | None = None
    type: int
    type_alias: str | None = None
    created_at: datetime
    modified_at: datetime

    class Config:
        orm_mode = True

    @root_validator
    def validate_constant_aliases(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        values["source_type_alias"] = str(
            get_constant_alias(
                table_name=PSQL_TABLE_ALIAS["Dataset"],
                column_name="source_type",
                value=values["source_type"],
            )
        )
        values["type_alias"] = str(
            get_constant_alias(
                table_name=PSQL_TABLE_ALIAS["Dataset"],
                column_name="type",
                value=values["type"],
            )
        )
        return values
