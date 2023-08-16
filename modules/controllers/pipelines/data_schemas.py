from typing import Dict, Any
from pydantic import BaseModel, validator, root_validator
from pydantic.types import UUID4
from datetime import datetime
import json

from config import settings
from ..helpers import validate_constants, get_constant_alias
from utils.exceptions import CustomHttpException


PSQL_TABLE_ALIAS = settings.database.psql.TABLE_ALIAS


class PipelineCreate(BaseModel):
    name: str
    dags: dict | list

    @root_validator(pre=True)
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        if not values["name"]:
            CustomHttpException(
                status_code=422, detail="Pipeline name shouldn't be empty"
            )
        if not values["dags"]:
            CustomHttpException(
                status_code=422, detail="Pipeline nodes should be a valid json"
            )
        try:
            json.dumps(values["dags"])
        except Exception:
            CustomHttpException(
                status_code=422, detail="Pipeline nodes should be a valid json"
            )
        return values


class PipelineUpdate(BaseModel):
    name: str | None = None
    dags: dict | list | str | None = None

    @root_validator(pre=True)
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        if not values["name"]:
            CustomHttpException(
                status_code=422, detail="Pipeline name shouldn't be empty"
            )
        if "dags" in values:
            if not values["dags"]:
                CustomHttpException(
                    status_code=422, detail="Pipeline nodes should be a valid json"
                )
            try:
                if isinstance(values["dags"], str):
                    values["dags"] = json.loads(values["dags"])
                json.dumps(values["dags"])
            except Exception:
                CustomHttpException(
                    status_code=422, detail="Pipeline nodes should be a valid json"
                )
        return values


class Pipeline(BaseModel):
    pipeline_id: UUID4
    name: str
    dags: dict | list
    created_at: datetime
    modified_at: datetime

    class Config:
        orm_mode = True


class Run(BaseModel):
    run_id: UUID4
    pipeline_id: UUID4
    name: str
    dags: dict | list
    results: dict | list
    meta: dict | list
    status: int
    status_alias: str | None = None
    started_at: datetime
    finished_at: datetime
    created_at: datetime
    modified_at: datetime

    class Config:
        orm_mode = True


class RunModel(BaseModel):
    run_id: UUID4
    model_id: UUID4
    created_at: datetime
    modified_at: datetime

    class Config:
        orm_mode = True
