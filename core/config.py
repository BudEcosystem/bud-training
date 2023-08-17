import argparse


def add_common_args(parser: argparse.ArgumentParser):
    parser.add_argument(
        "--run_id",
        type=str,
        required=True,
        help="UUID of the run for creating and managing checkpoints, logs and reports",
    )

    parser.add_argument(
        "--save_to_dir",
        type=str,
        required=True,
        help="The output directory where the model predictions and checkpoints will be written.",
    )

    parser.add_argument(
        "--save_report_to",
        type=str,
        default="tensorboard",
        help=(
            'The integration to report the results and logs to. Supported platforms are `"tensorboard"`'
            ' (default), `"wandb"` and `"comet_ml"`. Use `"all"` to report to all integrations.'
        ),
    )

    parser.add_argument(
        "--wandb_project_name",
        type=str,
        default=None,
        help="project name to use in wandb",
    )

    parser.add_argument("--wandb_group_name", type=str, help="Wandb group to be used")

    parser.add_argument(
        "--wandb_run_name",
        type=str,
        default=None,
        help="Run name to use in wandb",
    )
