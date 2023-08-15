import sys
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
sys.path.append(os.path.abspath(os.path.join(dir_path, os.pardir)))

from core.llm.utils.config import get_argparser

from utils.loaders import argparse_to_pydantic


if __name__ == "__main__":
    parser = get_argparser()
    argparse_to_pydantic(
        parser,
        model_name="LLMFinetune",
        model_desc="LLM Finetuning",
        exclude_args=["help", "model_path", "data_path", "output_dir"],
        extras={"inherits": ["config/training/common.yaml"]},
        export_path="config/training/llm.yaml",
    )
