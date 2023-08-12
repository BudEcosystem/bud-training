import os
from typing import List, Dict, Any
from bson import ObjectId
import json

from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
import uvicorn
from dotenv import load_dotenv
import pymongo

from server.common import custom_exception_middleware, ApiResponse
from server.pipeline import Pipeline

load_dotenv('.env')

CLIENT = pymongo.MongoClient(os.environ['DATABASE_URL'])
DATABASE = CLIENT["llm_training"]

pipeline = Pipeline(DATABASE['pipeline'])

app = FastAPI()

# app.middleware("http")(custom_exception_middleware)

@app.post("/pipeline/", response_model=ApiResponse)
async def add_pipeline(pipeline_details: Dict[str, Any]):

    response_data = pipeline.create_pipeline(pipeline_details)

    return ApiResponse(success=True, message="API call successful", data=response_data)

@app.get("/pipeline/", response_model=ApiResponse)
async def list_pipelines():
    
    trainings = pipeline.list_pieplines()
    return ApiResponse(success=True, message="API call successful", data=trainings)
    

# @app.delete("/train/{training_id}/", response_model=ApiResponse)
# async def delete_training(training_id: str):
#     # Delete training by ID from MongoDB
#     deleted_training = pipeline_collection.find_one_and_delete({"_id": ObjectId(training_id)})
#     if deleted_training:
#         return {"id": str(deleted_training["_id"]), **deleted_training}
#     else:
#         raise HTTPException(status_code=404, detail="Training not found")

@app.post("/train/", response_model=ApiResponse)
async def train():
    
    trainings = pipeline.start_train()
    return ApiResponse(success=True, message="API call successful", data=trainings)

@app.get("/train/", response_model=ApiResponse)
async def train_logs():
    
    trainings = pipeline.train_log(123)
    return ApiResponse(success=True, message="API call successful", data=trainings)

# Start the server
if __name__ == '__main__':
    uvicorn.run("main:app", host='0.0.0.0', port=8080, reload=True)