import subprocess, socket
from config import settings
import os

from utils.exceptions import CustomHttpException
from workers import celery_worker


def find_available_port(start_port=7860):
    port = start_port
    while True:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            result = sock.connect_ex(("0.0.0.0", port))
            if result != 0:  # Port is available
                return port
            port += 1


def run_inference_sd_lora(port, base_model_path, log_path, lora_path=None):
    command = [
        settings.PYTHON_ENV,
        "core/imagegen/stable_diffusion/utils/gradio_sd_lora.py",
        "--base_model_path",
        base_model_path,
        "--port",
        str(port),
    ]
    if lora_path:
        command.extend(("--lora_path", lora_path))
    with open(log_path, "a") as log_file:
        process = subprocess.Popen(command, stdout=log_file, stderr=subprocess.STDOUT)
    return process


def run_inference_sdxl_lora(port, base_model_path, log_path, lora_path=None):
    command = [
        settings.PYTHON_ENV,
        "core/imagegen/stable_diffusion/utils/gradio_sdxl_lora.py",
        "--base_model_path",
        base_model_path,
        "--port",
        str(port),
    ]
    if lora_path:
        command.extend(("--lora_path", lora_path))
    with open(log_path, "a") as log_file:
        process = subprocess.Popen(command, stdout=log_file, stderr=subprocess.STDOUT)
    return process


def run_inference_llama(name, serving_id, port, model_path, log_path, lora_path):
    command = [
        "/root/bud-serve/.env/bin/python3",
        "/root/bud-serve/fastchat/serve/model_worker.py",
        "--model-path",
        model_path,
        "--port",
        str(port),
        "--worker-address",
        "http://localhost:" + str(port),
        "--model-name",
        name + "-" + serving_id,
    ]
    with open(log_path, "a") as log_file:
        process = subprocess.Popen(command, stdout=log_file, stderr=subprocess.STDOUT)
    return process


def get_model_path(model):
    if model.source_type == 1:
        model_path = os.path.join(settings.MODEL_DIR, str(model.model_id))
    else:
        model_path = model.source
    return model_path


def run_inference(serving_id, port, model, base_model):
    model_path = get_model_path(model)
    log_path = os.path.join(settings.LOG_DIR, serving_id) + ".txt"
    if model.family == 2:
        if model.type == 2:
            task = celery_worker.run_inference_sdxl.apply_async(
                [serving_id, port, model_path, log_path], task_id=serving_id
            )
        if model.type == 0:
            base_model_path = get_model_path(base_model)
            task = celery_worker.run_inference_sdxl.apply_async(
                [serving_id, port, base_model_path, log_path, model_path],
                task_id=serving_id,
            )
    elif model.family == 1:
        if model.type == 2:
            task = celery_worker.run_inference_sd.apply_async(
                [serving_id, port, model_path, log_path], task_id=serving_id
            )
        if model.type == 0:
            base_model_path = get_model_path(base_model)
            task = celery_worker.run_inference_sd.apply_async(
                [serving_id, port, base_model_path, log_path, model_path],
                task_id=serving_id,
            )
    elif model.family == 0:
        task = celery_worker.run_inference_llama.apply_async(
            [model.name, serving_id, port, model_path, log_path], task_id=serving_id
        )
    else:
        CustomHttpException(
            status_code=422, detail="Currently we don't support inference of this model"
        )
