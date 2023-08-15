from .utils.common import load_data
from .utils.model import get_model
from .utils.config import get_config, get_argparser
from .utils.trainer import BudTrainer
from .utils.preprocess_data import prepare_data


def main():
    parser = get_argparser()
    args = parser.parse_args()

    config = get_config(args)
    model, tokenizer = get_model(args, config)

    dataset = load_data(args)
    train_dataset, eval_dataset = prepare_data(dataset, args, tokenizer)

    trainer = BudTrainer(
        model=model,
        config=config,
        tokenizer=tokenizer,
        train_dataset=train_dataset,
        training_args=args,
    )

    trainer.train()


if __name__ == "__main__":
    main()
