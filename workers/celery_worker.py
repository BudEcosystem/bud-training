from . import celery_app
from modules.controllers.servings import utils
from celery.contrib.abortable import AbortableTask, AbortableAsyncResult
import time

@celery_app.task(bind=True,base=AbortableTask)
def run_inference_sd(self,port,base_model_path,log_path,lora_path=None):
    process = utils.run_inference_sd_lora(port,base_model_path,log_path,lora_path=None)
    while not self.is_aborted():
        time.sleep(5)
    process.kill()
    return "Success"

def revoke_task(task_id):
    # celery_app.control.revoke(task_id, terminate=True, signal='SIGKILL')
    abortable_task = AbortableAsyncResult(task_id,app=celery_app)
    abortable_task.abort()
