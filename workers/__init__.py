from celery import Celery
from config import settings


def make_celery(backend_url, broker_url):
    celery_app = Celery("worker", backend=backend_url, broker=broker_url)

    return celery_app


celery_app = make_celery(settings.database.redis.URL, settings.database.redis.URL)
