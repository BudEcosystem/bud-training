from trainer.diffusers_trainer import DiffusersTrainer
from utils.train_config import get_lora_argparser


if __name__ == "__main__":
    args = get_lora_argparser()
    trainer = DiffusersTrainer(args)
    trainer.train()
