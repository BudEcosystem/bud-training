from typing import Dict, Any, List
from pydantic import BaseModel, Field, validator, root_validator
from pydantic.types import UUID4
from datetime import datetime
import json

from config import settings
from ..helpers import validate_constants, get_constant_alias
from utils.exceptions import CustomHttpException


PSQL_TABLE_ALIAS = settings.database.psql.TABLE_ALIAS


class PipelineCreate(BaseModel):
    agent_name: str
    agent_pipeline: dict | list

    @root_validator(pre=True)
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        if not values["agent_name"]:
            CustomHttpException(
                status_code=422, detail="Pipeline name shouldn't be empty"
            )
        if not values["agent_pipeline"]:
            CustomHttpException(
                status_code=422, detail="Pipeline nodes should be a valid json"
            )
        try:
            json.dumps(values["agent_pipeline"])
        except Exception:
            CustomHttpException(
                status_code=422, detail="Pipeline nodes should be a valid json"
            )
        return values


class PipelineUpdate(BaseModel):
    agent_name: str | None = None
    agent_pipeline: dict | list | str | None = None

    @root_validator(pre=True)
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        if "agent_name" in values and not values["agent_name"]:
            CustomHttpException(
                status_code=422, detail="Pipeline name shouldn't be empty"
            )
        if "agent_pipeline" in values:
            if not values["agent_pipeline"]:
                CustomHttpException(
                    status_code=422, detail="Pipeline nodes should be a valid json"
                )
            try:
                if isinstance(values["agent_pipeline"], str):
                    values["agent_pipeline"] = json.loads(values["agent_pipeline"])
                json.dumps(values["agent_pipeline"])
            except Exception:
                CustomHttpException(
                    status_code=422, detail="Pipeline nodes should be a valid json"
                )
        # TODO: Raise error if both name and dags is missing?
        return values


class Pipeline(BaseModel):
    id: UUID4
    agent_name: str
    agent_pipeline: dict | list
    # created_at: datetime
    # modified_at: datetime

    # class Config:
    #     orm_mode = True


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


# class Run(BaseModel):
#     run_id: UUID4
#     pipeline_id: UUID4
#     name: str
#     dags: dict | list
#     results: dict | list
#     meta: dict | list
#     status: int
#     status_alias: str | None = None
#     started_at: datetime | None = None
#     finished_at: datetime | None = None
#     created_at: datetime
#     modified_at: datetime

#     class Config:
#         orm_mode = True

#     @root_validator
#     def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
#         values["status_alias"] = str(
#             get_constant_alias(
#                 table_name=PSQL_TABLE_ALIAS.Run,
#                 column_name="status",
#                 value=values["status"],
#             )
#         )
#         return values


class Run(BaseModel):
    id: UUID4
    agent_id: UUID4
    session_id: UUID4
    output: Any = None
    status: str
    created_at: datetime
    updated_at: datetime

    @root_validator(pre=True)
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        if values["output"] is None:
            return values
        
        try:
            values["output"] = json.loads(values["output"])
        except Exception:
            pass

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
    label: str
    default: Any | None = None
    value: Any | None = None
    description: str | None = None
    placeholder: str | None = None
    options: list = []
    type: str | None = None


class Node(BaseModel):
    # node_id: str
    node_name: str | None = None
    icon: str | None = None
    description: str | None = None
    inputs: List[Property] | None = []
    outputs: List[Property] | None = []
    # category_id: int
    category_name: str | None = None
    # family_id: int
    # family_name: str | None = None

    @root_validator(pre=True)
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        return {
            "node_name": values["name"],
            "icon": values.get("icon"),
            "description": values.get("description"),
            "inputs": values.get("inputs", []),
            "outputs": values.get("outputs", []),
            "category_name": values.get("category", "All")
        }



class NodeCategory(BaseModel):
    # category_id: int
    category_name: str
    nodes: List[Node]


class PipelineConfig(BaseModel):
    out_config: List[NodeCategory] = []
    in_config: List[str] | List[Dict] = Field([], hidden=True)

    @root_validator(pre=True)
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        if not isinstance(values["in_config"], list):
            return values

        node_categories = {}
        # for node in values["in_config"].values():
        for node in values["in_config"]:
            node = Node(**node)
            if node.category_name not in node_categories:
                node_categories[node.category_name] = {
                    "category_name": node.category_name,
                    "nodes": [],
                }

            node_categories[node.category_name]["nodes"].append(node)

        values["out_config"] = [
            NodeCategory(
                # category_id=category,
                category_name=category_name,
                nodes=data["nodes"],
            )
            for category_name, data in sorted(node_categories.items())
        ]
        return values
