import gradio as gr

import torch
import random
from diffusers import StableDiffusionXLPipeline

import argparse

parser = argparse.ArgumentParser(description="Image Generation Tool")
parser.add_argument("--base_model_path", type=str, help="Base Model")
parser.add_argument("--lora_path", type=str, default=None, help="LoRA path")
parser.add_argument("--port", type=int, default=7680, help="port")

args = parser.parse_args()

base_model_path = args.base_model_path
lora_path = args.lora_path

pipe = StableDiffusionXLPipeline.from_pretrained(
    base_model_path, variant="fp16", torch_dtype=torch.float16
)
pipe = pipe.to("cuda")

if lora_path:
    pipe.load_lora_weights(lora_path, use_safetensors=False)


def test_stable_diffusion_t2i(
    prompt,
    negative_prompt="",
    guidance_scale=7.5,
    num_images_per_prompt=1,
    seed=-1,
):
    images = pipe(
        prompt,
        negative_prompt=negative_prompt,
        guidance_scale=guidance_scale,
        num_images_per_prompt=num_images_per_prompt,
        generator=torch.manual_seed(seed)
        if seed != -1
        else torch.manual_seed(random.randint(0, 3452029)),
    ).images

    return images[0]


with gr.Blocks() as demo:
    with gr.Row():
        with gr.Group():
            prompt = gr.Textbox(label="Prompt")
            negative_prompt = gr.Textbox(label="Negative Prompt")
            guidance = gr.Slider(
                minimum=0, maximum=1, value=0.7, step=0.01, label="Guidance Scale"
            )
            btn = gr.Button(value="Submit")
        outputs = gr.Image(type="pil", label="Generated Image")

    btn.click(
        test_stable_diffusion_t2i,
        inputs=[prompt, negative_prompt, guidance],
        outputs=[outputs],
    )

if __name__ == "__main__":
    demo.launch(server_name="0.0.0.0")
