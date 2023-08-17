import logging
import math
import os
import sys
import random
import shutil
from pathlib import Path

import diffusers
import transformers
import datasets

import numpy as np
import torch
import torch.nn.functional as F
import torch.utils.checkpoint
from accelerate import Accelerator
from accelerate.logging import get_logger
from accelerate.utils import ProjectConfiguration, set_seed
from datasets import load_dataset
from huggingface_hub import create_repo, upload_folder
from packaging import version
from torchvision import transforms
from tqdm.auto import tqdm

from diffusers import (
    DiffusionPipeline,
)
from diffusers.loaders import AttnProcsLayers
from diffusers.optimization import get_scheduler
from diffusers.utils import is_wandb_available, check_min_version
from diffusers.utils.import_utils import is_xformers_available


dir_path = os.path.dirname(os.path.realpath(__file__))
sys.path.append(os.path.abspath(os.path.join(dir_path, os.pardir)))


from library.lora import add_lora_layers_to_unet
from utils.custom_train_functions import compute_snr
from utils.models import load_diffusers_stable_diffusion_models


# Will error if the minimal version of diffusers is not installed. Remove at your own risks.
check_min_version("0.20.0.dev0")

logger = get_logger(__name__, log_level="INFO")


DATASET_NAME_MAPPING = {
    "lambdalabs/pokemon-blip-captions": ("image", "text"),
}


class DiffusersTrainer:
    def __init__(self, training_args):
        self.args = training_args
        logging_dir = Path(self.args.output_dir, self.args.logging_dir)

        # Make one log on every process with the configuration for debugging.
        logging.basicConfig(
            format="%(asctime)s - %(levelname)s - %(name)s - %(message)s",
            datefmt="%m/%d/%Y %H:%M:%S",
            level=logging.INFO,
        )

        self.accelerator = self.setup_accelerate(
            self.args.output_dir,
            logging_dir,
            self.args.gradient_accumulation_steps,
            self.args.mixed_precision,
            self.args.report_to,
        )
        logger.info(self.accelerator.state, main_process_only=False)

        self.repo_id = None
        self.train_transforms = None
        self.unet, self.vae, self.text_encoder, self.tokenizer, self.noise_scheduler = [
            None
        ] * 5

        self.weight_dtype = None
        self.lora_layers = None
        self.optimizer = None
        self.image_column, self.caption_column = None, None
        self.train_dataset, self.train_dataloader = None, None
        self.lr_scheduler, self.overrode_max_train_steps = None, None

    def setup_accelerate(
        self,
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
        if report_to in ["wandb", "all"]:
            accelerator.init_trackers(
                self.args.wandb_project_name,
                config={},
                init_kwargs={"wandb": {"name": self.args.wandb_run_name}},
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
        self,
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

    def load_models(self):
        (
            unet,
            vae,
            text_encoder,
            tokenizer,
            noise_scheduler,
        ) = load_diffusers_stable_diffusion_models(
            self.args.pretrained_model_name_or_path,
            self.args.revision,
            self.accelerator.mixed_precision,
            self.accelerator.device,
        )
        unet = add_lora_layers_to_unet(unet, self.args.rank)

        if self.args.enable_xformers_memory_efficient_attention:
            if is_xformers_available():
                import xformers

                xformers_version = version.parse(xformers.__version__)
                if xformers_version == version.parse("0.0.16"):
                    logger.warn(
                        "xFormers 0.0.16 cannot be used for training in some GPUs. If you observe problems during training, please update xFormers to at least 0.0.17. See https://huggingface.co/docs/diffusers/main/en/optimization/xformers for more details."
                    )
                unet.enable_xformers_memory_efficient_attention()
            else:
                raise ValueError(
                    "xformers is not available. Make sure it is installed correctly"
                )
        return unet, vae, text_encoder, tokenizer, noise_scheduler

    def prepare_optimizers(self):
        # Enable TF32 for faster training on Ampere GPUs,
        # cf https://pytorch.org/docs/stable/notes/cuda.html#tensorfloat-32-tf32-on-ampere-devices
        if self.args.allow_tf32:
            torch.backends.cuda.matmul.allow_tf32 = True

        if self.args.scale_lr:
            self.args.learning_rate = (
                self.args.learning_rate
                * self.args.gradient_accumulation_steps
                * self.args.train_batch_size
                * self.accelerator.num_processes
            )

        # Initialize the optimizer
        if self.args.use_8bit_adam:
            try:
                import bitsandbytes as bnb
            except ImportError:
                raise ImportError(
                    "Please install bitsandbytes to use 8-bit Adam. You can do so by running `pip install bitsandbytes`"
                )

            optimizer_cls = bnb.optim.AdamW8bit
        else:
            optimizer_cls = torch.optim.AdamW

        optimizer = optimizer_cls(
            self.lora_layers.parameters(),
            lr=self.args.learning_rate,
            betas=(self.args.adam_beta1, self.args.adam_beta2),
            weight_decay=self.args.adam_weight_decay,
            eps=self.args.adam_epsilon,
        )

        return optimizer

    def prepare_datasets(self):
        # Get the datasets: you can either provide your own training and evaluation files (see below)
        # or specify a Dataset from the hub (the dataset will be downloaded automatically from the datasets Hub).

        # In distributed training, the load_dataset function guarantees that only one local process can concurrently
        # download the dataset.
        if self.args.dataset_name is not None:
            # Downloading and loading a dataset from the hub.
            dataset = load_dataset(
                self.args.dataset_name,
                self.args.dataset_config_name,
                cache_dir=self.args.cache_dir,
                data_dir=self.args.train_data_dir,
            )
        else:
            data_files = {}
            if self.args.train_data_dir is not None:
                data_files["train"] = os.path.join(self.args.train_data_dir, "**")
            dataset = load_dataset(
                "imagefolder",
                data_files=data_files,
                cache_dir=self.args.cache_dir,
            )
            # See more about loading custom images at
            # https://huggingface.co/docs/datasets/v2.4.0/en/image_load#imagefolder

        # Preprocessing the datasets.
        # We need to tokenize inputs and targets.
        column_names = dataset["train"].column_names

        # 6. Get the column names for input/target.
        dataset_columns = DATASET_NAME_MAPPING.get(self.args.dataset_name, None)
        if self.args.image_column is None:
            image_column = (
                dataset_columns[0] if dataset_columns is not None else column_names[0]
            )
        else:
            image_column = self.args.image_column
            if image_column not in column_names:
                raise ValueError(
                    f"--image_column' value '{self.args.image_column}' needs to be one of: {', '.join(column_names)}"
                )
        if self.args.caption_column is None:
            caption_column = (
                dataset_columns[1] if dataset_columns is not None else column_names[1]
            )
        else:
            caption_column = self.args.caption_column
            if caption_column not in column_names:
                raise ValueError(
                    f"--caption_column' value '{self.args.caption_column}' needs to be one of: {', '.join(column_names)}"
                )
        return dataset, image_column, caption_column

    # Preprocessing the datasets.
    # We need to tokenize input captions and transform the images.
    def tokenize_captions(self, examples, is_train=True):
        captions = []
        for caption in examples[self.caption_column]:
            if isinstance(caption, str):
                captions.append(caption)
            elif isinstance(caption, (list, np.ndarray)):
                # take a random caption if there are multiple
                captions.append(random.choice(caption) if is_train else caption[0])
            else:
                raise ValueError(
                    f"Caption column `{self.caption_column}` should contain either strings or lists of strings."
                )
        inputs = self.tokenizer(
            captions,
            max_length=self.tokenizer.model_max_length,
            padding="max_length",
            truncation=True,
            return_tensors="pt",
        )
        return inputs.input_ids

    def preprocess_train(self, examples):
        images = [image.convert("RGB") for image in examples[self.image_column]]
        examples["pixel_values"] = [self.train_transforms(image) for image in images]
        examples["input_ids"] = self.tokenize_captions(examples)
        return examples

    def collate_fn(self, examples):
        pixel_values = torch.stack([example["pixel_values"] for example in examples])
        pixel_values = pixel_values.to(memory_format=torch.contiguous_format).float()
        input_ids = torch.stack([example["input_ids"] for example in examples])
        return {"pixel_values": pixel_values, "input_ids": input_ids}

    def preprocess_dataset(self, dataset):
        # Preprocessing the datasets.
        self.train_transforms = transforms.Compose(
            [
                transforms.Resize(
                    self.args.resolution,
                    interpolation=transforms.InterpolationMode.BILINEAR,
                ),
                transforms.CenterCrop(self.args.resolution)
                if self.args.center_crop
                else transforms.RandomCrop(self.args.resolution),
                transforms.RandomHorizontalFlip()
                if self.args.random_flip
                else transforms.Lambda(lambda x: x),
                transforms.ToTensor(),
                transforms.Normalize([0.5], [0.5]),
            ]
        )

        with self.accelerator.main_process_first():
            if self.args.max_train_samples is not None:
                dataset["train"] = (
                    dataset["train"]
                    .shuffle(seed=self.args.seed)
                    .select(range(self.args.max_train_samples))
                )
            # Set the training transforms
            train_dataset = dataset["train"].with_transform(self.preprocess_train)

        # DataLoaders creation:
        train_dataloader = torch.utils.data.DataLoader(
            train_dataset,
            shuffle=True,
            collate_fn=self.collate_fn,
            batch_size=self.args.train_batch_size,
            num_workers=self.args.dataloader_num_workers,
        )
        return train_dataset, train_dataloader

    def prepare_schedulers(self):
        # Scheduler and math around the number of training steps.
        overrode_max_train_steps = False
        num_update_steps_per_epoch = math.ceil(
            len(self.train_dataloader) / self.args.gradient_accumulation_steps
        )
        if self.args.max_train_steps is None:
            self.args.max_train_steps = (
                self.args.num_train_epochs * num_update_steps_per_epoch
            )
            overrode_max_train_steps = True

        lr_scheduler = get_scheduler(
            self.args.lr_scheduler,
            optimizer=self.optimizer,
            num_warmup_steps=self.args.lr_warmup_steps * self.accelerator.num_processes,
            num_training_steps=self.args.max_train_steps
            * self.accelerator.num_processes,
        )
        return lr_scheduler, overrode_max_train_steps

    def init_models_and_datasets(self):
        # If passed along, set the training seed now.
        if self.args.seed is not None:
            set_seed(self.args.seed)

        # Handle the repository creation
        if self.accelerator.is_main_process:
            self.repo_id = self.setup_train_output_repo(
                self.args.output_dir,
                self.args.push_to_hub,
                self.args.hub_model_id,
                self.args.hub_token,
            )

        # Load scheduler, tokenizer and models.
        (
            self.unet,
            self.vae,
            self.text_encoder,
            self.tokenizer,
            self.noise_scheduler,
        ) = self.load_models()

        self.weight_dtype = self.unet.dtype
        self.lora_layers = AttnProcsLayers(self.unet.attn_processors)

        self.optimizer = self.prepare_optimizers()

        dataset, self.image_column, self.caption_column = self.prepare_datasets()
        self.train_dataset, self.train_dataloader = self.preprocess_dataset(dataset)

        self.lr_scheduler, self.overrode_max_train_steps = self.prepare_schedulers()

        # Prepare everything with our `accelerator`.
        (
            self.lora_layers,
            self.optimizer,
            self.train_dataloader,
            self.lr_scheduler,
        ) = self.accelerator.prepare(
            self.lora_layers, self.optimizer, self.train_dataloader, self.lr_scheduler
        )

    def train(self):
        self.init_models_and_datasets()

        # We need to recalculate our total training steps as the size of the training dataloader may have changed.
        num_update_steps_per_epoch = math.ceil(
            len(self.train_dataloader) / self.args.gradient_accumulation_steps
        )
        if self.overrode_max_train_steps:
            self.args.max_train_steps = (
                self.args.num_train_epochs * num_update_steps_per_epoch
            )
        # Afterwards we recalculate our number of training epochs
        self.args.num_train_epochs = math.ceil(
            self.args.max_train_steps / num_update_steps_per_epoch
        )

        # We need to initialize the trackers we use, and also store our configuration.
        # The trackers initializes automatically on the main process.
        if self.accelerator.is_main_process:
            self.accelerator.init_trackers(
                "text2image-fine-tune", config=vars(self.args)
            )

        # Train!
        total_batch_size = (
            self.args.train_batch_size
            * self.accelerator.num_processes
            * self.args.gradient_accumulation_steps
        )

        logger.info("***** Running training *****")
        logger.info(f"  Num examples = {len(self.train_dataset)}")
        logger.info(f"  Num Epochs = {self.args.num_train_epochs}")
        logger.info(
            f"  Instantaneous batch size per device = {self.args.train_batch_size}"
        )
        logger.info(
            f"  Total train batch size (w. parallel, distributed & accumulation) = {total_batch_size}"
        )
        logger.info(
            f"  Gradient Accumulation steps = {self.args.gradient_accumulation_steps}"
        )
        logger.info(f"  Total optimization steps = {self.args.max_train_steps}")
        global_step = 0
        first_epoch = 0

        # Potentially load in the weights and states from a previous save
        if self.args.resume_from_checkpoint:
            if self.args.resume_from_checkpoint != "latest":
                path = os.path.basename(self.args.resume_from_checkpoint)
            else:
                # Get the most recent checkpoint
                dirs = os.listdir(self.args.output_dir)
                dirs = [d for d in dirs if d.startswith("checkpoint")]
                dirs = sorted(dirs, key=lambda x: int(x.split("-")[1]))
                path = dirs[-1] if len(dirs) > 0 else None

            if path is None:
                self.accelerator.print(
                    f"Checkpoint '{self.args.resume_from_checkpoint}' does not exist. Starting a new training run."
                )
                self.args.resume_from_checkpoint = None
            else:
                self.accelerator.print(f"Resuming from checkpoint {path}")
                self.accelerator.load_state(os.path.join(self.args.output_dir, path))
                global_step = int(path.split("-")[1])

                resume_global_step = global_step * self.args.gradient_accumulation_steps
                first_epoch = global_step // num_update_steps_per_epoch
                resume_step = resume_global_step % (
                    num_update_steps_per_epoch * self.args.gradient_accumulation_steps
                )
        # Only show the progress bar once on each machine.
        progress_bar = tqdm(
            range(global_step, self.args.max_train_steps),
            disable=not self.accelerator.is_local_main_process,
        )
        progress_bar.set_description("Steps")

        for epoch in range(first_epoch, self.args.num_train_epochs):
            self.unet.train()
            train_loss = 0.0
            for step, batch in enumerate(self.train_dataloader):
                # Skip steps until we reach the resumed step
                if (
                    self.args.resume_from_checkpoint
                    and epoch == first_epoch
                    and step < resume_step
                ):
                    if step % self.args.gradient_accumulation_steps == 0:
                        progress_bar.update(1)
                    continue

                with self.accelerator.accumulate(self.unet):
                    # Convert images to latent space
                    latents = self.vae.encode(
                        batch["pixel_values"].to(dtype=self.weight_dtype)
                    ).latent_dist.sample()
                    latents = latents * self.vae.config.scaling_factor

                    # Sample noise that we'll add to the latents
                    noise = torch.randn_like(latents)
                    if self.args.noise_offset:
                        # https://www.crosslabs.org//blog/diffusion-with-offset-noise
                        noise += self.args.noise_offset * torch.randn(
                            (latents.shape[0], latents.shape[1], 1, 1),
                            device=latents.device,
                        )

                    bsz = latents.shape[0]
                    # Sample a random timestep for each image
                    timesteps = torch.randint(
                        0,
                        self.noise_scheduler.config.num_train_timesteps,
                        (bsz,),
                        device=latents.device,
                    )
                    timesteps = timesteps.long()

                    # Add noise to the latents according to the noise magnitude at each timestep
                    # (this is the forward diffusion process)
                    noisy_latents = self.noise_scheduler.add_noise(
                        latents, noise, timesteps
                    )

                    # Get the text embedding for conditioning
                    encoder_hidden_states = self.text_encoder(batch["input_ids"])[0]

                    # Get the target for loss depending on the prediction type
                    if self.args.prediction_type is not None:
                        # set prediction_type of scheduler if defined
                        self.noise_scheduler.register_to_config(
                            prediction_type=self.args.prediction_type
                        )

                    if self.noise_scheduler.config.prediction_type == "epsilon":
                        target = noise
                    elif self.noise_scheduler.config.prediction_type == "v_prediction":
                        target = self.noise_scheduler.get_velocity(
                            latents, noise, timesteps
                        )
                    else:
                        raise ValueError(
                            f"Unknown prediction type {self.noise_scheduler.config.prediction_type}"
                        )

                    # Predict the noise residual and compute loss
                    model_pred = self.unet(
                        noisy_latents, timesteps, encoder_hidden_states
                    ).sample

                    if self.args.snr_gamma is None:
                        loss = F.mse_loss(
                            model_pred.float(), target.float(), reduction="mean"
                        )
                    else:
                        # Compute loss-weights as per Section 3.4 of https://arxiv.org/abs/2303.09556.
                        # Since we predict the noise instead of x_0, the original formulation is slightly changed.
                        # This is discussed in Section 4.2 of the same paper.
                        snr = compute_snr(timesteps)
                        mse_loss_weights = (
                            torch.stack(
                                [snr, self.args.snr_gamma * torch.ones_like(timesteps)],
                                dim=1,
                            ).min(dim=1)[0]
                            / snr
                        )
                        # We first calculate the original loss. Then we mean over the non-batch dimensions and
                        # rebalance the sample-wise losses with their respective loss weights.
                        # Finally, we take the mean of the rebalanced loss.
                        loss = F.mse_loss(
                            model_pred.float(), target.float(), reduction="none"
                        )
                        loss = (
                            loss.mean(dim=list(range(1, len(loss.shape))))
                            * mse_loss_weights
                        )
                        loss = loss.mean()

                    # Gather the losses across all processes for logging (if we use distributed training).
                    avg_loss = self.accelerator.gather(
                        loss.repeat(self.args.train_batch_size)
                    ).mean()
                    train_loss += (
                        avg_loss.item() / self.args.gradient_accumulation_steps
                    )

                    # Backpropagate
                    self.accelerator.backward(loss)
                    if self.accelerator.sync_gradients:
                        params_to_clip = self.lora_layers.parameters()
                        self.accelerator.clip_grad_norm_(
                            params_to_clip, self.args.max_grad_norm
                        )
                    self.optimizer.step()
                    self.lr_scheduler.step()
                    self.optimizer.zero_grad()

                # Checks if the accelerator has performed an optimization step behind the scenes
                if self.accelerator.sync_gradients:
                    progress_bar.update(1)
                    global_step += 1
                    self.accelerator.log({"train_loss": train_loss}, step=global_step)
                    train_loss = 0.0

                    if global_step % self.args.checkpointing_steps == 0:
                        if self.accelerator.is_main_process:
                            # _before_ saving state, check if this save would set us over the `checkpoints_total_limit`
                            if self.args.checkpoints_total_limit is not None:
                                checkpoints = os.listdir(self.args.output_dir)
                                checkpoints = [
                                    d for d in checkpoints if d.startswith("checkpoint")
                                ]
                                checkpoints = sorted(
                                    checkpoints, key=lambda x: int(x.split("-")[1])
                                )

                                # before we save the new checkpoint, we need to have at _most_ `checkpoints_total_limit - 1` checkpoints
                                if (
                                    len(checkpoints)
                                    >= self.args.checkpoints_total_limit
                                ):
                                    num_to_remove = (
                                        len(checkpoints)
                                        - self.args.checkpoints_total_limit
                                        + 1
                                    )
                                    removing_checkpoints = checkpoints[0:num_to_remove]

                                    logger.info(
                                        f"{len(checkpoints)} checkpoints already exist, removing {len(removing_checkpoints)} checkpoints"
                                    )
                                    logger.info(
                                        f"removing checkpoints: {', '.join(removing_checkpoints)}"
                                    )

                                    for removing_checkpoint in removing_checkpoints:
                                        removing_checkpoint = os.path.join(
                                            self.args.output_dir, removing_checkpoint
                                        )
                                        shutil.rmtree(removing_checkpoint)

                            save_path = os.path.join(
                                self.args.output_dir, f"checkpoint-{global_step}"
                            )
                            self.accelerator.save_state(save_path)
                            logger.info(f"Saved state to {save_path}")

                logs = {
                    "step_loss": loss.detach().item(),
                    "lr": self.lr_scheduler.get_last_lr()[0],
                }
                progress_bar.set_postfix(**logs)

                if global_step >= self.args.max_train_steps:
                    break

            if self.accelerator.is_main_process:
                if (
                    self.args.validation_prompt is not None
                    and epoch % self.args.validation_epochs == 0
                ):
                    logger.info(
                        f"Running validation... \n Generating {self.args.num_validation_images} images with prompt:"
                        f" {self.args.validation_prompt}."
                    )

                    images = self.validate(epoch)

        # Save the lora layers
        self.accelerator.wait_for_everyone()
        if self.accelerator.is_main_process:
            self.unet = self.unet.to(torch.float32)
            self.unet.save_attn_procs(self.args.output_dir)

            if self.args.push_to_hub:
                self.save_model_card(
                    self.repo_id,
                    images=images,
                    base_model=self.args.pretrained_model_name_or_path,
                    dataset_name=self.args.dataset_name,
                    repo_folder=self.args.output_dir,
                )
                upload_folder(
                    repo_id=self.repo_id,
                    folder_path=self.args.output_dir,
                    commit_message="End of training",
                    ignore_patterns=["step_*", "epoch_*"],
                )

        # Final inference
        self.validate(epoch, final_inference=True)

        self.accelerator.end_training()

    def validate(self, epoch, final_inference=False):
        # create pipeline
        if final_inference:
            # Load previous pipeline
            pipeline = DiffusionPipeline.from_pretrained(
                self.args.pretrained_model_name_or_path,
                revision=self.args.revision,
                torch_dtype=self.weight_dtype,
            )
            pipeline = pipeline.to(self.accelerator.device)

            # load attention processors
            pipeline.unet.load_attn_procs(self.args.output_dir)
        else:
            pipeline = DiffusionPipeline.from_pretrained(
                self.args.pretrained_model_name_or_path,
                unet=self.accelerator.unwrap_model(self.unet),
                revision=self.args.revision,
                torch_dtype=self.weight_dtype,
            )
            pipeline = pipeline.to(self.accelerator.device)
            pipeline.set_progress_bar_config(disable=True)

        # run inference
        generator = torch.Generator(device=self.accelerator.device)
        if self.args.seed is not None:
            generator = generator.manual_seed(self.args.seed)
        images = []
        if self.args.validation_prompt is not None:
            for _ in range(self.args.num_validation_images):
                images.append(
                    pipeline(
                        self.args.validation_prompt,
                        num_inference_steps=30,
                        generator=generator,
                    ).images[0]
                )

        if self.accelerator.is_main_process and self.args.validation_prompt is not None:
            for tracker in self.accelerator.trackers:
                if tracker.name == "tensorboard":
                    np_images = np.stack([np.asarray(img) for img in images])
                    tracker.writer.add_images(
                        "validation", np_images, epoch, dataformats="NHWC"
                    )
                if tracker.name == "wandb":
                    try:
                        getattr(wandb, "Image")
                    except (NameError, AttributeError):
                        import wandb

                    tracker.log(
                        {
                            "validation": [
                                wandb.Image(
                                    image,
                                    caption=f"{i}: {self.args.validation_prompt}",
                                )
                                for i, image in enumerate(images)
                            ]
                        }
                    )

        del pipeline
        torch.cuda.empty_cache()
        return images

    def save_model_card(
        self,
        repo_id: str,
        images=None,
        base_model=str,
        dataset_name=str,
        repo_folder=None,
    ):
        img_str = ""
        for i, image in enumerate(images):
            image.save(os.path.join(repo_folder, f"image_{i}.png"))
            img_str += f"![img_{i}](./image_{i}.png)\n"

        yaml = f"""
        ---
        license: creativeml-openrail-m
        base_model: {base_model}
        tags:
        - stable-diffusion
        - stable-diffusion-diffusers
        - text-to-image
        - diffusers
        - lora
        inference: true
        ---
        """
        model_card = f"""
        # LoRA text2image fine-tuning - {repo_id}
        These are LoRA adaption weights for {base_model}. The weights were fine-tuned on the {dataset_name} dataset. You can find some example images in the following. \n
        {img_str}
        """
        with open(os.path.join(repo_folder, "README.md"), "w") as f:
            f.write(yaml + model_card)
