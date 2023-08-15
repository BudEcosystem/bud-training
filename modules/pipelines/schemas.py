from typing import List, Any
from pydantic import BaseModel as _BaseModel
from pydantic import Field, model_validator, validator
from os import path as osp
import yaml

from utils.factory import SpecialExclusionBaseModel
from config import ROOT_PATH, CONSTANTS


NODE_CONSTANTS = CONSTANTS.get("nodes", {})


class BaseModel(_BaseModel):
    class Config:
        @staticmethod
        def json_schema_extra(schema: dict, _):
            props = {}
            for k, v in schema.get("properties", {}).items():
                if not v.get("hidden", False):
                    props[k] = v
            schema["properties"] = props


class Property(BaseModel):
    name: str
    default: Any | None = None
    description: str
    title: str
    type: int | str
    type_alias: str | None = None

    @model_validator(mode="after")
    def validate_model(self) -> "Property":
        if self.type not in NODE_CONSTANTS.get("property_type", {}):
            raise ValueError(f"Property type '{self.type}' is not defined in constants")

        self.type_alias = self.type
        self.type = NODE_CONSTANTS["property_type"][self.type]


class TrainConfig(BaseModel):
    description: str | None = None
    properties: List[Property] | None = []


class Node(TrainConfig):
    node_id: int
    node_name: str | None = None
    family: str


class NodeCreate(Node):
    config_path: str | None = Field(None, hidden=True)

    @model_validator(mode="after")
    def validate_model(self) -> "Node":
        if self.node_id not in NODE_CONSTANTS.get("name", {}):
            raise ValueError(f"Node type '{self.node_id}' is not defined in constants")
        self.node_name = NODE_CONSTANTS["name"][self.node_id]

        if not self.config_path:
            return self

        if not osp.isfile(self.config_path):
            raise FileNotFoundError(
                f"Couldn't locate the config file at '{self.config_path}'"
            )

        with open(self.config_path, "r") as file:
            data = yaml.safe_load(file)

        if data:
            self.description = data["description"]
            self.properties = []

            if data.get("inherits"):
                if isinstance(data["inherits"], str):
                    data["inherits"] = [data["inherits"]]
                elif isinstance(data["inherits"], dict):
                    data["inherits"] = list(data["inherits"].values())

                for config_path in data["inherits"]:
                    self.properties.extend(
                        Node(
                            node_id=-1, family="inherited", config_path=config_path
                        ).properties
                    )

            for key, value in data["properties"].items():
                self.properties.append(Property(name=key, **value))

        return self


class NodeCategory(BaseModel):
    category: str
    nodes: List[Node]


class Pipelines(SpecialExclusionBaseModel):
    _special_exclusions = {"config_path"}

    pipelines: List[NodeCategory] | None = []
    config_path: str = Field(
        osp.join(ROOT_PATH, "config", "pipelines.yaml"), hidden=True
    )

    @model_validator(mode="after")
    def validate_model(self) -> "Pipelines":
        if not osp.isfile(self.config_path):
            raise FileNotFoundError(
                f"Couldn't locate the config file at '{self.config_path}'"
            )

        with open(self.config_path, "r") as file:
            data = yaml.safe_load(file)

        self.pipelines = []
        for category, nodes in data.items():
            self.pipelines.append(
                NodeCategory(
                    category=category, nodes=[NodeCreate(**node) for node in nodes]
                )
            )

        return self
