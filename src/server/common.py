from typing import List, Union, Any
import json
from dataclasses import dataclass

from fastapi import Request, HTTPException
from fastapi.responses import JSONResponse

class CustomException(HTTPException):
    def __init__(self, status_code: int, detail: str):
        super().__init__(status_code=status_code, detail=detail)

async def custom_exception_middleware(request: Request, call_next):
    try:
        response = await call_next(request)
        return response
    except CustomException as exc:
        return JSONResponse(status_code=exc.status_code, content={"error": exc.detail})
    except HTTPException as exc:
        return JSONResponse(status_code=exc.status_code, content={"error": exc.detail})
    except Exception as exc:
        print(exc)
        return JSONResponse(status_code=500, content={"message": "Internal server error.", "status": "error"})
    

@dataclass
class ApiResponse:
    success: bool
    message: str
    data: Any = None

def convert_mongo_object_to_dict(document):

    for item in document:
        item["id"] = str(item["_id"])
        item.pop("_id")
    
    return json.loads(json.dumps(document, default=str))
