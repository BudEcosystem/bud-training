from typing import List, Any, Dict
from pydantic import BaseModel as _BaseModel
from pydantic import Field, root_validator
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

    @root_validator(pre=True)
    def validate_model(cls, values) -> "Property":
        if isinstance(values["type"], int) or (
            isinstance(values["type"], str) and values["type"].isdigit()
        ):
            properties = {
                value: key
                for key, value in NODE_CONSTANTS.get("property_type", {}).items()
            }
            values["type"] = int(values["type"])
        else:
            properties = NODE_CONSTANTS.get("property_type", {})

        if values["type"] not in properties:
            raise ValueError(
                f"Property type '{values['type']}' is not defined in constants"
            )

        if isinstance(values["type"], int):
            values["type_alias"] = NODE_CONSTANTS["property_type"][values["type"]]
        else:
            values["type_alias"] = values["type"]
            values["type"] = NODE_CONSTANTS["property_type"][values["type"]]

        return values


class TrainConfig(BaseModel):
    description: str | None = None
    properties: List[Property] | None = []
    outputs: List[Property] | None = []


class Node(TrainConfig):
    node_id: int
    node_name: str | None = None
    family: str

    @root_validator(pre=True)
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        if values["node_id"] != -1 and values["node_id"] not in NODE_CONSTANTS.get(
            "name", {}
        ):
            raise ValueError(
                f"Node type '{values['node_id']}' is not defined in constants"
            )

        if values["node_id"] != -1:
            values["node_name"] = NODE_CONSTANTS["name"][values["node_id"]]

        if not values["config_path"]:
            return values

        if not osp.isfile(values["config_path"]):
            raise FileNotFoundError(
                f"Couldn't locate the config file at '{values['config_path']}'"
            )

        with open(values["config_path"], "r") as file:
            data = yaml.safe_load(file)

        if data:
            values["description"] = data["description"]
            values["properties"] = []

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
                    values["properties"].extend(
                        NodeCreate(
                            node_id=-1, family="inherited", config_path=config_path
                        ).properties
                    )

            values["outputs"] = []
            if data.get("outputs") and not len(values.get("outputs", [])):
                if not isinstance(data["outputs"], dict):
                    raise ValueError("'outputs' param should be of type dict")

                for name, output in data["outputs"].items():
                    values["outputs"].append(Property(name=name, **output))

            for key, value in data["properties"].items():
                values["properties"].append(Property(name=key, **value))

        return values


class NodeCreate(Node):
    config_path: str


class NodeCategory(BaseModel):
    category: str
    nodes: List[Node]


class Pipelines(SpecialExclusionBaseModel):
    _special_exclusions = {"config_path"}

    pipelines: List[NodeCategory] | None = []
    config_path: str = Field(
        osp.join(ROOT_PATH, "config", "pipelines.yaml"), hidden=True
    )

    @root_validator
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        if not osp.isfile(values["config_path"]):
            raise FileNotFoundError(
                f"Couldn't locate the config file at '{values['config_path']}'"
            )

        with open(values["config_path"], "r") as file:
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

        values["pipelines"] = []
        for category, nodes in data.items():
            values["pipelines"].append(
                NodeCategory(
                    category=category,
                    nodes=[Node(**refactor_node(node)) for node in nodes],
                )
            )

        return values
