from . import celery_app
from modules.controllers.models import utils

@celery_app.task(bind=True)
def run_inference(self,port):
    result = utils.run_inference_sd_lora(port)
    return "Success"
