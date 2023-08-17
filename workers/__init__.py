from celery import Celery
from config import settings
import redis


def make_celery(backend_url, broker_url):
    celery_app = Celery("worker", backend=backend_url, broker=broker_url)

    return celery_app


celery_app = make_celery(settings.database.redis.URL, settings.database.redis.URL)
redis_client = redis.from_url(settings.database.redis.URL)