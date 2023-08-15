from pathlib import Path

import diffusers
import transformers
import datasets
from accelerate import Accelerator
from accelerate.utils import ProjectConfiguration
from diffusers.utils import is_wandb_available
from huggingface_hub import create_repo


def setup_accelerate(
    output_dir: str | Path,
    logging_dir: str | Path,
    gradient_accumulation_steps: int,
    mixed_precision: str,
    report_to: str,
) -> Accelerator:
    accelerator_project_config = ProjectConfiguration(
        project_dir=output_dir, logging_dir=logging_dir
    )

    accelerator = Accelerator(
        gradient_accumulation_steps=gradient_accumulation_steps,
        mixed_precision=mixed_precision,
        log_with=report_to,
        project_config=accelerator_project_config,
    )

    if report_to == "wandb":
        if not is_wandb_available():
            raise ImportError(
                "Make sure to install wandb if you want to use it for logging during training."
            )
        import wandb

    if accelerator.is_local_main_process:
        datasets.utils.logging.set_verbosity_warning()
        transformers.utils.logging.set_verbosity_warning()
        diffusers.utils.logging.set_verbosity_info()
    else:
        datasets.utils.logging.set_verbosity_error()
        transformers.utils.logging.set_verbosity_error()
        diffusers.utils.logging.set_verbosity_error()

    return accelerator


def setup_train_output_repo(
    output_dir: str | Path,
    push_to_hub: bool = False,
    hub_model_id: str | None = None,
    hub_token: str | None = None,
) -> str:
    # Handle the repository creation
    if output_dir is not None:
        Path(output_dir).mkdir(exist_ok=True, parents=True)

    if push_to_hub:
        repo_id = create_repo(
            repo_id=hub_model_id or Path(output_dir).name,
            exist_ok=True,
            token=hub_token,
        ).repo_id

    return repo_id
