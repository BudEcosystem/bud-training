from os import path as osp
import yaml


def create_node_schema_from_config(config_path: str):
    if not osp.isfile(config_path):
        raise FileNotFoundError(f"Couldn't locate the config file at '{config_path}'")
    
    with open(config_path, "r") as file:
        data = yaml.safe_load(file)
    
    