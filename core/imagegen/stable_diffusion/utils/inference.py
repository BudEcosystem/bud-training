import torch
import random
from os import path as osp
from datetime import datetime
from pathlib import Path
from diffusers import StableDiffusionPipeline


def test_stable_diffusion_t2i(
    base_model_path,
    lora_path,
    result_save_dir,
    prompt,
    negative_prompt="",
    guidance_scale=7.5,
    num_images_per_prompt=1,
    seed=-1,
):
    pipe = StableDiffusionPipeline.from_pretrained(
        base_model_path, variant="fp16", torch_dtype=torch.float16
    )
    pipe = pipe.to("cuda")

    if lora_path:
        pipe.load_lora_weights(lora_path, use_safetensors=False)

    images = pipe(
        prompt,
        negative_prompt=negative_prompt,
        guidance_scale=guidance_scale,
        num_images_per_prompt=num_images_per_prompt,
        generator=torch.manual_seed(seed) if seed != -1 else random.randint(0, 3452029),
    ).images

    save_path = osp.join(result_save_dir, datetime.now().strftime("%Y-%m-%d-%H-%M-%s"))
    Path(save_path).mkdir(exist_ok=True, parents=True)
    for i, image in enumerate(images):
        image.save(osp.join(save_path, f"{i}.png"))
