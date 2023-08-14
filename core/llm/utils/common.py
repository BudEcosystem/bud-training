import argparse

from datasets import load_dataset

def load_data(data_args):

    if data_args.data_path.endswith(".json") or data_args.data_path.endswith(".jsonl"):
        data = load_dataset("json", data_files=data_args.data_path)
    else:
        data = load_dataset(data_args.data_path)
    
    return data[data_args.split]