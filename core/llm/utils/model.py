
from transformers import LlamaTokenizer
from collie import LlamaForCausalLM
from peft import get_peft_model, LoraConfig, TaskType

from .relora import ReLoRaModel

def get_model(args, config):
    tokenizer = LlamaTokenizer.from_pretrained(args.model_path, trust_remote_code=args.trust_remote_code)
    model = LlamaForCausalLM.from_pretrained(args.model_path, config=config)

    if args.train_type == 'lora':
        peft_config = LoraConfig(
            r=8,
            lora_alpha=16,
            target_modules=["q_proj", "v_proj"],
            lora_dropout=0.05,
            bias="none",
            task_type=TaskType.CAUSAL_LM
        )
        model = get_peft_model(model, peft_config)
    elif args.train_type == 'relora':
        model = ReLoRaModel(
            model,
            r=128,
            lora_alpha=32,
            lora_dropout=0.1,
            target_modules=["attn", "mlp"]
        )

    return model, tokenizer