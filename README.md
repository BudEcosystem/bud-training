# Bud MLOps

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

#### Run API Server
```
uvicorn server.main:app
```

The service will be deployed to 8000 port. Change the port if required by specifiying ```--port``` arg.

Go to http://[host]:[port]/docs (ex: http://localhost:8000/docs) to view the API documentation
