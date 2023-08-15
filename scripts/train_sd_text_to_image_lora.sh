#!/bin/bash

export MODEL_NAME="runwayml/stable-diffusion-v1-5"
export TRAIN_DIR="datasets/logo-captioning-blip/processed"
export DATASET_NAME="AngelUrq/logos"

accelerate launch --config_file="config/accelerate/accelerate_config.yaml" --mixed_precision="fp16" core/imagegen/stable_diffusion/train_text_to_image_lora.py \
  --pretrained_model_name_or_path=$MODEL_NAME \
  --dataset_name=$DATASET_NAME \
  --image_column=image \
  --caption_column=text \
  --resolution=512 \
  --train_batch_size=4 \
  --gradient_accumulation_steps=1 \
  --gradient_checkpointing \
  --checkpointing_steps=200 \
  --max_train_steps=200 \
  --learning_rate=2e-04 \
  --max_grad_norm=1 \
  --lr_scheduler="polynomial" --lr_warmup_steps=0 \
  --output_dir="checkpoints/logo-train-test"
