#!/bin/bash

export MODEL_NAME="runwayml/stable-diffusion-v1-5"
export TRAIN_DIR="datasets/logo-captioning-blip/processed"

accelerate launch --mixed_precision="fp16" train_text_to_image_lora.py \
  --pretrained_model_name_or_path=$MODEL_NAME \
  --train_data_dir=$TRAIN_DIR \
  --caption_column=caption \
  --resolution=512 \
  --train_batch_size=4 \
  --gradient_accumulation_steps=1 \
  --gradient_checkpointing \
  --checkpointing_steps=1000 \
  --max_train_steps=84710 \
  --learning_rate=2e-04 \
  --max_grad_norm=1 \
  --lr_scheduler="polynomial" --lr_warmup_steps=0 \
  --output_dir="models/logo-captioning-data"
