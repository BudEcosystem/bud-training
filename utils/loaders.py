from __future__ import annotations
from pydantic import Field, create_model
from pathlib import Path
import argparse
import yaml
import json


def argparse_to_pydantic(
    parser: argparse.ArgumentParser,
    model_name: str,
    model_desc: str,
    exclude_args: list | None = None,
    extras: dict | None = None,
    export_path: str | None = None,
):
    schema_vals = {}
    exclude_args = exclude_args or []
    for arg in parser._actions:
        if arg.dest in exclude_args:
            continue
        val = arg.default
        arg.type = arg.type or type(val)
        desc: str = arg.help.replace("%(default)s", str(val))
        schema_vals[arg.dest] = (arg.type, Field(val, description=desc))

    model = create_model(model_name, **schema_vals)
    model.__doc__ = model_desc

    if export_path:
        suffix = Path(export_path).suffix
        model_schema = model.schema()
        if isinstance(extras, dict) and len(extras):
            model_schema.update(extras)
        with open(export_path, "w") as file_obj:
            if suffix in [".yaml", ".yml"]:
                yaml.dump(model_schema, file_obj, default_flow_style=False)
            elif suffix in [".json", ".jsonl"]:
                json.dump(model_schema, file_obj, indent=4)
            else:
                file_obj.write(json.dumps(model_schema))
        print(f"'{model_name}' schema saved to -> {export_path}")
    return model
