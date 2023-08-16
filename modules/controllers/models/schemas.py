from typing import Dict, Any
from pydantic import BaseModel, validator, root_validator
from pydantic.types import UUID4
from datetime import datetime

from config import settings
from ..helpers import validate_constants, get_constant_alias
from utils.exceptions import CustomHttpException


PSQL_TABLE_ALIAS = settings.database.psql.TABLE_ALIAS


class ModelCreate(BaseModel):
    name: str
    source: str | None = None
    type: int
    source_type: int
    family: int
    base_model_id: UUID4 | None = None

    @validator("source_type")
    def source_type_is_valid(cls, value: str) -> str:
        if not validate_constants(
            table_name=PSQL_TABLE_ALIAS.Model, column_name="source_type", value=value
        ):
            raise CustomHttpException(
                status_code=422, detail=f"'source_type' doesn't support value '{value}'"
            )
        return value

    @validator("type")
    def type_is_valid(cls, value: str) -> str:
        if not validate_constants(
            table_name=PSQL_TABLE_ALIAS.Model, column_name="type", value=value
        ):
            raise CustomHttpException(
                status_code=422, detail=f"'type' doesn't support value '{value}'"
            )
        return value
    
    @validator("family")
    def family_is_valid(cls, value: str) -> str:
        if not validate_constants(
            table_name=PSQL_TABLE_ALIAS.Model, column_name="family", value=value
        ):
            raise CustomHttpException(
                status_code=422, detail=f"'family' doesn't support value '{value}'"
            )
        return value


class ModelUpdate(BaseModel):
    name: str


class Model(BaseModel):
    model_id: UUID4
    name: str
    source: str | None = None
    type: int
    type_alias: str | None = None
    source_type: int
    source_type_alias: str | None = None
    family: int
    family_alias: str | None = None
    base_model_id: UUID4 | None = None
    is_finetuned: bool
    created_at: datetime
    modified_at: datetime

    class Config:
        orm_mode = True

    @root_validator
    def validate_constant_aliases(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        values["source_type_alias"] = str(
            get_constant_alias(
                table_name=PSQL_TABLE_ALIAS.Model,
                column_name="source_type",
                value=values["source_type"],
            )
        )
        values["type_alias"] = str(
            get_constant_alias(
                table_name=PSQL_TABLE_ALIAS.Model,
                column_name="type",
                value=values["type"],
            )
        )
        values["family_alias"] = str(
            get_constant_alias(
                table_name=PSQL_TABLE_ALIAS.Model,
                column_name="family",
                value=values["type"],
            )
        )
        return values
