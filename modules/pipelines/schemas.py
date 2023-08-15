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
        if isinstance(self.type, int) or (
            isinstance(self.type, str) and self.type.isdigit()
        ):
            properties = {
                value: key
                for key, value in NODE_CONSTANTS.get("property_type", {}).items()
            }
            self.type = int(self.type)
        else:
            properties = NODE_CONSTANTS.get("property_type", {})

        if self.type not in properties:
            raise ValueError(f"Property type '{self.type}' is not defined in constants")

        if isinstance(self.type, int):
            self.type_alias = NODE_CONSTANTS["property_type"][self.type]
        else:
            self.type_alias = self.type
            self.type = NODE_CONSTANTS["property_type"][self.type]

        return self


class TrainConfig(BaseModel):
    description: str | None = None
    properties: List[Property] | None = []
    outputs: List[Property] | None = []


class Node(TrainConfig):
    node_id: int
    node_name: str | None = None
    family: str


class NodeCreate(Node):
    config_path: str

    @model_validator(mode="after")
    def validate_model(self) -> "NodeCreate":
        if self.node_id != -1 and self.node_id not in NODE_CONSTANTS.get("name", {}):
            raise ValueError(f"Node type '{self.node_id}' is not defined in constants")

        if self.node_id != -1:
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
                elif not isinstance(data["inherits"], list):
                    raise ValueError(
                        "'inherits' param should be of type str, dict or list"
                    )

                for config_path in data["inherits"]:
                    self.properties.extend(
                        NodeCreate(
                            node_id=-1, family="inherited", config_path=config_path
                        ).properties
                    )

            if data.get("outputs") and not len(self.outputs):
                if not isinstance(data["outputs"], dict):
                    raise ValueError("'outputs' param should be of type dict")

                for name, output in data["outputs"].items():
                    self.outputs.append(Property(name=name, **output))

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

        def refactor_node(node):
            if "outputs" in node:
                if not isinstance(node["outputs"], dict):
                    raise ValueError("'outputs' param should be of type dict")
            else:
                return node

            outputs = []
            for key, value in node["outputs"].items():
                output = {"name": key}
                output.update(value)
                outputs.append(output)

            node["outputs"] = outputs
            return node

        self.pipelines = []
        for category, nodes in data.items():
            self.pipelines.append(
                NodeCategory(
                    category=category,
                    nodes=[NodeCreate(**refactor_node(node)) for node in nodes],
                )
            )

        return self
