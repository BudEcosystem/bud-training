from os import path as osp, pardir as ospardir, environ
import sys

dir_path = osp.dirname(osp.realpath(__file__))
sys.path.append(osp.abspath(osp.join(dir_path, ospardir)))

from trainer.diffusers_sd_lora import DiffusersTrainer
from utils.train_config import get_sd_lora_argparser, add_common_args


def main():
    parser = get_sd_lora_argparser(parse_args=False)
    add_common_args(parser)

    args = parser.parse_args()

    args.pretrained_model_name_or_path = args.base_model

    if osp.isdir(args.dataset):
        args.train_data_dir = args.dataset
        args.dataset_name = None
    else:
        args.dataset_name = args.dataset
        args.train_data_dir = None

    args.output_dir = args.save_to_dir
    args.logging_dir = osp.join(args.output_dir, "logs")

    if args.save_report_to:
        args.report_to = args.save_report_to

    if args.save_report_to:
        args.wandb_project_name = args.wandb_project_name or "Stable Diffusion 1.5"
        args.wandb_run_name = args.wandb_run_name or args.run_id

    env_local_rank = int(environ.get("LOCAL_RANK", -1))
    if env_local_rank != -1 and env_local_rank != args.local_rank:
        args.local_rank = env_local_rank

    # Sanity checks
    if args.dataset_name is None and args.train_data_dir is None:
        raise ValueError("Need either a dataset name or a training folder.")

    trainer = DiffusersTrainer(args)
    trainer.train()

    return args.output_dir


if __name__ == "__main__":
    main()
