from . import celery_app


@celery_app.task(bind=True)
def spawn_spider(self, run_id):
    return True
