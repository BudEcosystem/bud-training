import sys
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
sys.path.append(os.path.abspath(os.path.join(dir_path, os.pardir)))

from core.llm.utils.config import get_argparser
from core.imagegen.stable_diffusion.utils.train_config import get_lora_argparser

from utils.loaders import argparse_to_pydantic


if __name__ == "__main__":
    parser = get_argparser(parse_args=False)
    argparse_to_pydantic(
        parser,
        model_name="LLMFinetune",
        model_desc="LLM Finetuning",
        exclude_args=["help", "model_path", "data_path", "output_dir"],
        extras={
            "inherits": ["config/training/common.yaml"],
            "outputs": {
                "model": {
                    "description": "Finetuned Model Checkpoint",
                    "title": "Model",
                    "type": "model",
                }
            },
        },
        export_path="config/training/llm.yaml",
    )

    parser = get_lora_argparser(parse_args=False)
    argparse_to_pydantic(
        parser,
        model_name="SDLoRAFinetune",
        model_desc="SD LoRA Finetuning",
        exclude_args=[
            "help",
            "pretrained_model_name_or_path",
            "data_path",
            "dataset_name",
            "train_data_dir",
            "output_dir",
            "cache_dir",
            "logging_dir",
        ],
        extras={
            "inherits": ["config/training/common.yaml"],
            "outputs": {
                "model": {
                    "description": "Finetuned Model Checkpoint",
                    "title": "Model",
                    "type": "model",
                }
            },
        },
        export_path="config/training/sd_lora.yaml",
    )
