
from transformers import LlamaTokenizer
from collie import LlamaForCausalLM


def get_model(args, config):
    tokenizer = LlamaTokenizer.from_pretrained(args.model_path, trust_remote_code=args.trust_remote_code)
    model = LlamaForCausalLM.from_pretrained(args.model_path, config=config)

    return model, tokenizer