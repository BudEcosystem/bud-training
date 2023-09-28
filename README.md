# BudMLOps: Train, Evaluate & Deploy Gen-AI models
---
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) ![PyTorch](https://img.shields.io/badge/PyTorch-23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white) ![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Shell Script](https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white) ![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)


## Backend Service Setup

### Pre-requisites

- Python >= 3.10
- Postgres
- Redis

### Setup

#### Install Requirements

```
pip install -r requirements.txt
```

#### Prepare environment variables
```
cp .env.sample .env
```
Fill the env variables in the new .env file

#### Migrations

```
alembic revision --autogenerate -m "Initial table creation"
```

```
alembic upgrade head
```

### Setup

```
mkdir logs
```

#### Run Celery workers
```
celery -A workers.celery_worker.celery_app worker --concurrency=1 -Ofair --loglevel=debug  -P gevent -E --logfile=logs/celery.log
```

#### Run JupyterHub
```
docker-compose -f .docker/jupyterhub/docker-compose.yml --env-file ./.env up -d
```

#### Run API Server
```
uvicorn server.main:app
```

The service will be deployed to 8000 port. Change the port if required by specifiying ```--port``` arg.

Go to http://[host]:[port]/docs (ex: http://localhost:8000/docs) to view the API documentation


## [Dashboard Setup](dashboard/README.md)