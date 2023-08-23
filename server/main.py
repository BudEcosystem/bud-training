import time
import json
from os import path as osp
from typing import Union

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse, HTMLResponse, RedirectResponse
from fastapi import Request, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from starlette.concurrency import iterate_in_threadpool

from .routers import datasets, models, pipelines, runs, notebooks, servings, logs
from utils.exceptions import CustomHttpException
from utils.loggers import get_logger
from config import settings


logger = get_logger("server_log")


app = FastAPI()

app.mount(
    "/static",
    StaticFiles(directory=osp.join(settings.ROOT_PATH, "server/static")),
    name="static",
)

app.add_middleware(TrustedHostMiddleware, allowed_hosts=settings.ALLOWED_HOSTS)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["OPTIONS", "GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# app.add_middleware(GZipMiddleware, minimum_size=500)


app.include_router(datasets.router)
app.include_router(pipelines.router)
app.include_router(runs.router)
app.include_router(notebooks.router)
app.include_router(models.router)
app.include_router(logs.router)
app.include_router(servings.router)


templates = Jinja2Templates(directory=osp.join(settings.ROOT_PATH, "server/templates"))


@app.middleware("http")
async def custom_exception_middleware(request: Request, call_next):
    start_time = time.time()
    try:
        response = await call_next(request)
        # response_body = [section async for section in response.body_iterator]
        # response.body_iterator = iterate_in_threadpool(iter(response_body))
        # try:
        #     response_body = json.loads(response_body[0].decode())
        #     if response.status_code == 404 and response_body == {"detail": "Not Found"}:
        #         response = RedirectResponse("/404")
        # except Exception:
        #     pass
    except CustomHttpException as exc:
        response = JSONResponse(
            status_code=exc.status_code,
            content={"message": exc.detail, "success": False},
        )
    except HTTPException as exc:
        response = JSONResponse(
            status_code=exc.status_code, content={"error": exc.detail}
        )
    except Exception as exc:
        logger.error(exc, exc_info=True)
        response = JSONResponse(
            status_code=500,
            content={"message": "Internal server error", "success": False},
        )

    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response


@app.get("/ping", response_class=JSONResponse)
async def ping(request: Request):
    return JSONResponse(status_code=200, content={"message": "pong", "success": True})


@app.get("/404", response_class=HTMLResponse)
async def page_not_found(request: Request):
    return templates.TemplateResponse("404.html", {"request": request})
