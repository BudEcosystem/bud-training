from dataclasses import dataclass, field
from typing import Optional
import argparse

from transformers import Seq2SeqTrainingArguments
from collie.config import CollieConfig


def parse_args():
    parser = argparse.ArgumentParser()

    parser.add_argument('--model_path', required=True, help="Path to pretrained model or model from huggingface")  
    parser.add_argument('--trust_remote_code', default=True, help="Allow loading remote code for tokenizer")
    
    parser.add_argument('--data_path', required=True, help="path of the json file or dataset from huggingface")
    parser.add_argument('--split', default="train", help="split of the json file or dataset from huggingface")
    parser.add_argument('--split_ratio', default=0.05, type=float, help="Test/Validation split ratio") 
    parser.add_argument('--max_length', default=2048, type=int, help="The cut off length for the tokenizer")
    parser.add_argument('--prompt_template', default="default", help="Prompt template to be used for the model input") 
    parser.add_argument('--prompt_column', default="prompt", help="Column name for prompt column") 
    parser.add_argument('--response_column', default="response", help="Column name for response column") 
    parser.add_argument('--history_column', default="history", help="Column name for history column") 

    parser.add_argument('--stage', default="sft", help="training stage")
    parser.add_argument('--train_type', default="full", help="training type")
    parser.add_argument('--output_dir', required=True, help="path to save the output")
    parser.add_argument('--train_epochs', default=3, type=int, help="number epochs for train")
    parser.add_argument('--eval_per_n_steps', default=200, type=int, help="every n steps for eval")
    parser.add_argument('--train_micro_batch_size', default=4, type=int, help="micro batch size per device")
    parser.add_argument('--eval_batch_size', default=4, type=int, help="eval batch size per device")
    parser.add_argument('--learning_rate', default=0.01, type=float, help="Learning rate for the training")
    parser.add_argument('--optimizer', default="efficient", help="Optimizer to be used. [efficient, adamw]")
    parser.add_argument('--tp_size', default=1, type=int, help="Tensor parallelism count")
    parser.add_argument('--dp_size', default=1, type=int, help="Data parallelism count")
    parser.add_argument('--pp_size', default=1, type=int, help="Pipeline parallelism count")
    parser.add_argument('--wandb_team', default="bud-a", help="Wandb team to be used")
    parser.add_argument('--wandb_project', default="training", help="Wandb project to be used")
    parser.add_argument('--wandb_group', help="Wandb group to be used")

    args = parser.parse_args()
    return args

def get_config(args):
    
    config = CollieConfig.from_pretrained(args.model_path, trust_remote_code=args.trust_remote_code)
    
    config.tp_size = args.tp_size
    config.dp_size = args.dp_size
    config.pp_size = args.pp_size
    config.train_epochs = args.train_epochs
    config.eval_per_n_steps = args.eval_per_n_steps
    config.train_micro_batch_size = args.train_micro_batch_size
    config.eval_batch_size = args.eval_batch_size
    
    config.ds_config = {
            
            "fp16": {
                "enabled": True
            },
            "zero_allow_untested_optimizer": True,
            "zero_force_ds_cpu_optimizer": False,
            
            "zero_optimization": {
                "stage": 3
            },
            "monitor_config": {
                "enabled": True,
                # "tag": args.run_name,
                "wandb": {
                    "enabled": True,
                    "team": args.wandb_team,
                    "project": args.wandb_project,
                    "group": args.wandb_group
                }
            }
    }

    return config
