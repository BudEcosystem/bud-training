from celery.contrib.abortable import AbortableTask, AbortableAsyncResult
import time

from . import celery_app, redis_client
from modules.controllers.servings import utils
from modules.controllers.pipelines.orchestrate import DAGRun


@celery_app.task(bind=True, base=AbortableTask)
def run_inference_sd(self, serving_id, port, base_model_path, log_path, lora_path=None):
    redis_client.delete("celery-task-meta-" + (serving_id))
    process = utils.run_inference_sd_lora(
        port, base_model_path, log_path, lora_path=None
    )
    while not self.is_aborted():
        time.sleep(5)
    process.kill()
    return "Success"


@celery_app.task(bind=True, base=AbortableTask)
def run_inference_sdxl(
    self, serving_id, port, base_model_path, log_path, lora_path=None
):
    redis_client.delete("celery-task-meta-" + (serving_id))
    process = utils.run_inference_sdxl_lora(
        port, base_model_path, log_path, lora_path=None
    )
    while not self.is_aborted():
        time.sleep(5)
    process.kill()
    return "Success"


@celery_app.task(bind=True, base=AbortableTask)
def run_inference_llama(
    self, name, serving_id, port, base_model_path, log_path, lora_path=None
):
    redis_client.delete("celery-task-meta-" + (serving_id))
    process = utils.run_inference_llama(
        name, serving_id, port, base_model_path, log_path, lora_path=None
    )
    while not self.is_aborted():
        time.sleep(5)
    process.kill()
    return "Success"


@celery_app.task(bind=True, base=AbortableTask)
def run_pipeline(self, run_id: str):
    run_id = str(run_id)
    redis_client.delete("celery-task-meta-" + (run_id))
    DAGRun(run_id)
    return "success"


def revoke_task(task_id):
    abortable_task = AbortableAsyncResult(task_id, app=celery_app)
    abortable_task.abort()
