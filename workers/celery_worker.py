from . import celery_app
from modules.controllers.servings import utils

@celery_app.task(bind=True)
def run_inference_sd(self,port,base_model_path,log_path,lora_path=None):
    result = utils.run_inference_sd_lora(port,base_model_path,log_path,lora_path=None)
    return "Success"
