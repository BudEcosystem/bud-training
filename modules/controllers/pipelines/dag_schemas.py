from typing import Any, Dict, List, ForwardRef
from pydantic import BaseModel, validator, root_validator
from os import path as osp
from itertools import groupby

from .utils import validate_property_value_by_type
from config import settings


DAGNode = ForwardRef("DAGNode")


class Node(BaseModel):
    id: str
    node_id: int
    node_name: str
    category_id: int
    category_name: str
    family_id: int
    family_name: str
    properties: dict
    outputs: dict
    meta: dict = {}
    script: str | None = None
    cmd: str | None = None

    @root_validator(pre=True)
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        properties = {}
        outputs = {}

        node_id = values["node_id"]
        values["node_name"] = settings.pipelines.AVAILABLE_PIPELINES[node_id].node_name
        values["category_id"] = settings.pipelines.AVAILABLE_PIPELINES[
            node_id
        ].category_id
        values["category_name"] = settings.pipelines.AVAILABLE_PIPELINES[
            node_id
        ].category_name
        values["family_id"] = settings.pipelines.AVAILABLE_PIPELINES[node_id].family_id
        values["family_name"] = settings.pipelines.AVAILABLE_PIPELINES[
            node_id
        ].family_name

        cls.validate_script_path(values.get("script"), values["node_name"])

        # TODO: Change to [ instead of get
        cls.validate_node_id(node_id, values.get("node_name"))

        for prop in values.get("properties", []):
            # TODO: Enable this validation
            # cls.validate_property_name(node_id, prop["name"])
            val = cls.validate_property_value(prop)
            properties[prop["id"]] = {
                "name": prop["name"],
                "value": val,
                "ref": None,
                "type": prop["type"],
            }

        for out in values.get("outputs", []):
            # TODO: Uncomment this
            # cls.validate_output_name(node_id, out["name"])
            outputs[out["id"]] = {
                "name": out["name"],
                "type": out["type"],
                "value": None,
            }

        values["properties"] = properties
        values["outputs"] = outputs
        return values

    @staticmethod
    def validate_node_id(node_id: int, node_name: str) -> None:
        if node_id not in settings.pipelines.AVAILABLE_PIPELINES:
            raise ValueError(f"{node_name} is not a supported node")

    @staticmethod
    def validate_property_name(node_id: int, prop_name: str) -> None:
        found = False
        for prop in settings.pipelines.AVAILABLE_PIPELINES[node_id].properties:
            if prop.name == prop_name:
                found = True
                break

        assert found, f"Property {prop_name} is not recognized"

    @staticmethod
    def validate_property_value(property: Dict[str, Any]) -> Any:
        # TODO: Revert this
        # val_type = int(property["type"])
        val_type = property["type"]
        val = None
        if "value" in property:
            val = validate_property_value_by_type(val_type, property["value"])
        return val

    @staticmethod
    def validate_output_name(node_id: int, out_name: str) -> None:
        found = False
        for prop in settings.pipelines.AVAILABLE_PIPELINES[node_id].outputs:
            if prop.name == out_name:
                found = True
                break

        assert found, f"Output property {out_name} is not recognized"

    @staticmethod
    def validate_script_path(script_path: str, node_name: str):
        if script_path and not osp.isfile(script_path):
            raise FileNotFoundError(
                f"Script file '{script_path}' for node '{node_name}' doesn't exist"
            )


class DAGNode(Node):
    children: List[DAGNode] = []
    parents: List[DAGNode] = []

    @root_validator
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        for key in ["children", "parents"]:
            if values[key] is None:
                values[key] = []
        return values

    # TODO: Invoke add child
    @validator("children", always=True)
    def register_as_parent_to_children(cls, children: List[DAGNode]):
        for child in children:
            if cls not in child.parents:
                child.parents.append(cls)

    @validator("parents", always=True)
    def register_as_child_to_parents(cls, parents: List[DAGNode]):
        for parent in parents:
            if cls not in parent.children:
                parent.children.append(cls)

    def add_child(self, child: DAGNode, child_prop_id: str, parent_prop_id: str):
        if parent_prop_id not in self.properties:
            raise ValueError(
                f"{parent_prop_id} doesn't exist for parent node {self.id}"
            )
        if child_prop_id not in child.properties:
            raise ValueError(
                f"{parent_prop_id} doesn't exist for child node {child.id}"
            )

        child.properties[child_prop_id]["ref"] = parent_prop_id

        print(self.id, child.id, [child.id for child in self.children])
        if child.id not in [child.id for child in self.children]:
            self.children.append(child)
            if self.id not in [parent.id for parent in child.parents]:
                child.parents.append(self)

    @property
    def descendants(cls):
        nodes = set(child.id for child in cls.children)
        for child in cls.children:
            nodes.union(child.descendants)
        return list(nodes)

    @property
    def ancestors(cls):
        nodes = set(parent.id for parent in cls.parents)
        for parent in cls.parents:
            nodes.union(parent.ancestors)
        return list(nodes)


DAGNode.update_forward_refs()


class Graph(BaseModel):
    nodes: Dict[str, DAGNode]
    direction: dict


class BuildDAG(BaseModel):
    graph: Graph
    config: Dict[Any, Any]

    @root_validator(pre=True)
    def validate_model(cls, values: Dict[str, Any]) -> Dict[str, Any]:
        if "config" not in values:
            raise ValueError("'config' is required")
        elif not isinstance(values["config"], dict):
            raise ValueError("'config' should be a valid dict")

        nodes = cls.build_nodes(values["config"])
        cls.build_edges(nodes, values["config"])
        direction = cls.build_direction(nodes)

        values["graph"] = Graph(nodes=nodes, direction=direction)
        return values

    @staticmethod
    def build_nodes(config: dict) -> Dict[str, DAGNode]:
        nodes = {}
        for node in config["pipeline"]["nodes"]:
            obj = DAGNode(**node["data"])
            nodes[obj.id] = obj
        return nodes

    @staticmethod
    def build_edges(nodes: Dict[str, DAGNode], config: dict):
        for edge in config["pipeline"]["edges"]:
            print(edge)
            nodes[edge["source"]].add_child(
                nodes[edge["target"]],
                edge["targetHandle"].split(".", 1)[-1],
                edge["sourceHandle"].split(".", 1)[-1],
            )

        return nodes

    @staticmethod
    def build_direction(nodes: Dict[str, DAGNode]):
        direction = {node.id: len(node.ancestors) for node in nodes.values()}
        return dict(sorted(direction.items(), key=lambda x: x[1]))


def test():
    import json

    with open("./node_flow.json", "r") as file:
        data = json.load(file)

    dag = BuildDAG(config=data)
    print("Direction")
    print(dag.graph.direction)
    print("Descendants")
    print("dndnode_0: ", dag.graph.nodes["dndnode_0"].descendants)
    print("dndnode_1: ", dag.graph.nodes["dndnode_1"].descendants)
    print("dndnode_2: ", dag.graph.nodes["dndnode_2"].descendants)
    print("dndnode_3: ", dag.graph.nodes["dndnode_3"].descendants)
    print("dndnode_4: ", dag.graph.nodes["dndnode_4"].descendants)
    print("Ancestors")
    print("dndnode_0: ", dag.graph.nodes["dndnode_0"].ancestors)
    print("dndnode_1: ", dag.graph.nodes["dndnode_1"].ancestors)
    print("dndnode_2: ", dag.graph.nodes["dndnode_2"].ancestors)
    print("dndnode_3: ", dag.graph.nodes["dndnode_3"].ancestors)
    print("dndnode_4: ", dag.graph.nodes["dndnode_4"].ancestors)
