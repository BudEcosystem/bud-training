import time

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi import Request, HTTPException
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware

from .routers import datasets, models, pipelines, runs, servings
from utils.exceptions import CustomHttpException
from utils.loggers import get_logger
from config import settings


logger = get_logger("server_log")


app = FastAPI()

app.add_middleware(TrustedHostMiddleware, allowed_hosts=settings.ALLOWED_HOSTS)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["OPTIONS", "GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

app.add_middleware(GZipMiddleware, minimum_size=500)


app.include_router(datasets.router)


@app.middleware("http")
async def custom_exception_middleware(request: Request, call_next):
    start_time = time.time()
    try:
        response = await call_next(request)
    except CustomHttpException as exc:
        response = JSONResponse(
            status_code=exc.status_code,
            content={"message": exc.detail, "success": False},
        )
    except HTTPException as exc:
        raise JSONResponse(status_code=exc.status_code, content={"error": exc.detail})
    except Exception as exc:
        logger.error(exc, exc_info=True)
        response = JSONResponse(
            status_code=500,
            content={"message": "Internal server error.", "success": False},
        )

    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response
