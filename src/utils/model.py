
from transformers import LlamaTokenizer
from collie import LlamaForCausalLM
from peft import get_peft_model, LoraConfig, TaskType


def get_model(args, config):
    tokenizer = LlamaTokenizer.from_pretrained(args.model_path, trust_remote_code=args.trust_remote_code)
    model = LlamaForCausalLM.from_pretrained(args.model_path, config=config)

    if args.train_type == 'lora':
        peft_config = LoraConfig(
            r=8,
            lora_alpha=16,
            target_modules=["q_proj", "v_proj", "k_proj"],
            lora_dropout=0.1,
            bias="none",
            task_type=TaskType.CAUSAL_LM
        )
        model = get_peft_model(model, peft_config)

    return model, tokenizer