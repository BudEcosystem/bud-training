from typing import List, Any, Dict
from os import path as osp
from pydantic import BaseModel as _BaseModel
from pydantic import Field, root_validator
import yaml

from utils.factory import SpecialExclusionBaseModel
from config import settings


NODE_CONSTANTS = settings.pipelines.CONSTANTS.get("nodes", {})


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
        if isinstance(values["type"], str) and not values["type"].isdigit():
            properties = {
                value: key
                for key, value in NODE_CONSTANTS.get("property_type", {}).items()
            }
        else:
            values["type"] = int(values["type"])
            properties = NODE_CONSTANTS.get("property_type", {})

        if values["type"] not in properties:
            raise ValueError(
                f"Property type '{values['type']}' is not defined in constants"
            )

        if isinstance(values["type"], int):
            values["type_alias"] = properties[values["type"]]
        else:
            values["type_alias"] = values["type"]
            values["type"] = properties[values["type"]]

        return values


class TrainConfig(BaseModel):
    description: str | None = None
    properties: List[Property] | None = []
    outputs: List[Property] | None = []


class Node(TrainConfig):
    node_id: int
    node_name: str | None = None
    category_id: int
    category_name: str | None = None
    family_id: int
    family_name: str | None = None

    @root_validator(pre=True)
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        for item in [
            {"_id": "node_id", "name": "node_name", "constant": "name"},
            {"_id": "category_id", "name": "category_name", "constant": "category"},
            {"_id": "family_id", "name": "family_name", "constant": "family"},
        ]:
            if values[item["_id"]] != -1 and values[
                item["_id"]
            ] not in NODE_CONSTANTS.get(item["constant"], {}):
                raise ValueError(
                    f"{item['_id']} '{values[item['_id']]}' is not defined in constants"
                )

            if values[item["_id"]] != -1:
                values[item["name"]] = NODE_CONSTANTS[item["constant"]][
                    values[item["_id"]]
                ]

        if values.get("config_path"):
            if not osp.isfile(values["config_path"]):
                raise FileNotFoundError(
                    f"Couldn't locate the config file at '{values['config_path']}'"
                )
            with open(values["config_path"], "r") as file:
                data = yaml.safe_load(file)
        else:
            data = values

        if data:
            properties = []

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
                    properties.extend(
                        Node(
                            **{
                                "node_id": -1,
                                "category_id": -1,
                                "family_id": -1,
                                "config_path": config_path,
                            }
                        ).properties
                    )

            outputs = []
            if data.get("outputs") and not len(values.get("outputs", [])):
                if not isinstance(data["outputs"], dict):
                    raise ValueError("'outputs' param should be of type dict")

                for name, output in data["outputs"].items():
                    outputs.append(Property(name=name, **output))
            else:
                outputs = values.get("outputs", [])

            if isinstance(data.get("properties", []), dict):
                for key, value in data["properties"].items():
                    properties.append(Property(name=key, **value))
            else:
                properties = values.get("properties", [])

            values["description"] = data["description"]
            values["properties"] = properties
            values["outputs"] = outputs

        return values


class NodeCategory(BaseModel):
    category_id: int
    category_name: str
    nodes: List[Node]


class PipelinesCreate(SpecialExclusionBaseModel):
    _special_exclusions = {"config_path"}

    pipelines: Dict[int, NodeCategory] = {}
    configs: List[str] | List[Dict] = Field(settings.pipelines.CONFIGS, hidden=True)

    @root_validator
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        values["pipelines"] = {}

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

        for config in values["configs"]:
            if isinstance(config, str):
                if not osp.isfile(config):
                    raise FileNotFoundError(
                        f"Couldn't locate the configs at '{config}'"
                    )

                with open(config, "r") as file:
                    data = yaml.safe_load(file)
            else:
                data = config

            if data.get("exclude", False):
                continue

            values["pipelines"][data["node_id"]] = Node(**refactor_node(data))

        values["pipelines"] = dict(sorted(values["pipelines"].items()))
        return values


class Pipelines(BaseModel):
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
