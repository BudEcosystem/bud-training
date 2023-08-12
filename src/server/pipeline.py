import os
import json
from typing import List
from dataclasses import dataclass, asdict
from bson import json_util
import subprocess
from fastapi import FastAPI, HTTPException

from server.common import convert_mongo_object_to_dict

@dataclass
class PipelineSchema:
    name: str
    experiment: int
    status: str # created, running, completed, failed


class Pipeline():

    def __init__(self, db):
        self.db = db


    def create_pipeline(self, details):
        print(details)

        pipeline = PipelineSchema(
            name= details['name'],
            experiment= details['experiment'],
            status= 'created',
        )
        pipeline_dict = asdict(pipeline)
        
        result = self.db.insert_one(pipeline_dict)
        
        return {"id": str(result.inserted_id)}

    def list_pieplines(self):
        data = list(self.db.find({}))
        # formatted_documents = [format_document(doc) for doc in data]
        
        document_dict = convert_mongo_object_to_dict(data)
        return document_dict
    
    def start_train(self):

        log_directory = "log_files"
        model_name = "meta-llama-Llama-2-7b-hf"

        # Create the log directory if it doesn't exist
        os.makedirs(log_directory, exist_ok=True)
        log_file = os.path.join(log_directory, f"process_{model_name}.log")
        log_file_handle = open(log_file, "w")

        script_path = 'train.py'
        # Run the training script using subprocess
        process = subprocess.Popen(["python", script_path, "--model_path", "meta-llama/Llama-2-7b-hf", "--data_path", "/root/bud-conv/data-processes/data/dummy-data-conversation.json", "--output_dir", "output"],
                                   stdout=log_file_handle,
                                   stderr=log_file_handle,
                                   universal_newlines=True)
        print(process.pid)
        process_info = {"process": process.pid, "log_file": log_file_handle}
        
        return process_info
    
    def train_log(self, pid):
        log_directory = "log_files"
        model_name = "meta-llama-Llama-2-7b-hf"

        log_file = os.path.join(log_directory, f"process_{model_name}.log")
        
        if os.path.exists(log_file):
            with open(log_file, "r") as log_file_handle:
                logs = log_file_handle.read()
            return {"logs": logs}
        else:
            raise HTTPException(status_code=404, detail="Log file not found")

