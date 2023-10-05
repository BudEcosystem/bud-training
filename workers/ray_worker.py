import argparse
import time
from ray.job_submission import JobSubmissionClient, JobStatus

from config import settings


def wait_until_status(job_id, status_to_wait_for, timeout_seconds=5):
    start = time.time()
    while time.time() - start <= timeout_seconds:
        status = client.get_job_status(job_id)
        # print(f"status: {status}")
        print(client.get_job_logs(job_id))
        if status in status_to_wait_for:
            break
        time.sleep(1)


def submit_dataset_jobs_to_ray(configs):
    client = JobSubmissionClient(settings.ray.RAY_HEAD_URL)
    job_id = client.submit_job(
        # Entrypoint shell command to execute
        entrypoint=f"python workers/distributed.py --configs {configs}",
        # Path to the local directory that contains the script.py file
        runtime_env={
            "working_dir": settings.ROOT_DIR,
            "py_modules": ["modules/controllers/datasets/preprocesors"],
            "pip": "requirements.txt",
        },
    )
    wait_until_status(
        job_id, {JobStatus.SUCCEEDED, JobStatus.STOPPED, JobStatus.FAILED}
    )