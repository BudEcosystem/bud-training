from typing import Dict, Any, List
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


class RunCreate(BaseModel):
    pipeline_id: UUID4
    name: str
    dags: dict | list
    status: int

    @validator("status")
    def status_is_valid(cls, value: int) -> int:
        if not validate_constants(
            table_name=PSQL_TABLE_ALIAS.Run,
            column_name="status",
            value=value,
        ):
            raise CustomHttpException(
                status_code=422, detail=f"'status' doesn't support value '{value}'"
            )
        return value


class RunUpdate(BaseModel):
    dags: dict | list | None = None
    results: dict | list | None = None
    meta: dict | list = None
    status: int | None = None
    started_at: datetime | None = None
    finished_at: datetime | None = None

    @validator("status")
    def status_is_valid(cls, value: int) -> int:
        if not validate_constants(
            table_name=PSQL_TABLE_ALIAS.Run,
            column_name="status",
            value=value,
        ):
            raise CustomHttpException(
                status_code=422, detail=f"'status' doesn't support value '{value}'"
            )
        return value

    @validator("dags")
    def validate_model(cls, value: Dict[str, Any]) -> Dict[str, Any]:
        if not value:
            CustomHttpException(
                status_code=422, detail="Pipeline nodes should be a valid json"
            )
        try:
            if isinstance(value, str):
                value = json.loads(value)
            json.dumps(value)
        except Exception:
            CustomHttpException(
                status_code=422, detail="Pipeline nodes should be a valid json"
            )
        return value


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

    @root_validator
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        values["status_alias"] = str(
            get_constant_alias(
                table_name=PSQL_TABLE_ALIAS.Run,
                column_name="status",
                value=values["status"],
            )
        )
        return values


class RunModelCreate(BaseModel):
    run_id: UUID4
    model_id: UUID4


class RunModel(BaseModel):
    run_id: UUID4
    model_id: UUID4
    created_at: datetime
    modified_at: datetime

    class Config:
        orm_mode = True


class Property(BaseModel):
    name: str
    default: Any | None = None
    description: str
    title: str
    type: int | str
    type_alias: str | None = None


class Node(BaseModel):
    node_id: int
    node_name: str | None = None
    description: str | None = None
    properties: List[Property] | None = []
    outputs: List[Property] | None = []
    category_id: int
    category_name: str | None = None
    family_id: int
    family_name: str | None = None


class NodeCategory(BaseModel):
    category_id: int
    category_name: str
    nodes: List[Node]


class PipelineConfig(BaseModel):
    config: List[NodeCategory]

    @root_validator(pre=True)
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        if not isinstance(values["config"], dict):
            return values

        node_categories = {}
        for node in values["config"].values():
            node: Node
            if node.category_id not in node_categories:
                node_categories[node.category_id] = {
                    "category_name": node.category_name,
                    "nodes": [],
                }

            node_categories[node.category_id]["nodes"].append(node)

        values["config"] = [
            NodeCategory(
                category_id=category,
                category_name=data["category_name"],
                nodes=data["nodes"],
            )
            for category, data in sorted(node_categories.items())
        ]
        return values
