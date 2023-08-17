from .utils.common import load_data
from .utils.model import get_model
from .utils.config import get_config, get_argparser, add_common_args
from .utils.trainer import BudTrainer
from .utils.preprocess_data import prepare_data


def main():
    parser = get_argparser(parse_args=False)
    add_common_args(parser)
    args = parser.parse_args()

    args.output_dir = args.save_to_dir

    args.model_path = args.base_model
    args.data_path = args.dataset

    args.wandb_project = args.wandb_project_name or "LLaMa"
    args.wandb_group = args.wandb_group_name or args.run_id

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
    return args.output_dir


if __name__ == "__main__":
    main()
