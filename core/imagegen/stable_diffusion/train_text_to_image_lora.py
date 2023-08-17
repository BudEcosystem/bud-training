from os import path as osp

from ...config import add_common_args
from trainer.diffusers_trainer import DiffusersTrainer
from utils.train_config import get_lora_argparser


def main():
    parser = get_lora_argparser(parse_args=False)
    add_common_args(parser)

    args = parser.parse_args()

    if osp.isdir(args.dataset_name):
        args.train_data_dir = args.dataset_name
        args.dataset_name = None

    args.output_dir = args.save_to_dir
    args.logging_dir = osp.join(args.output_dir, "logs")

    if args.save_report_to:
        args.report_to = args.save_report_to

    if args.save_report_to:
        args.wandb_project_name = args.wandb_project_name or "Stable Diffusion 1.5"
        args.wandb_run_name = args.wandb_run_name or args.run_id

    trainer = DiffusersTrainer(args)
    trainer.train()

    return args.output_dir


if __name__ == "__main__":
    main()
