from os import path as osp
from pathlib import Path
from datetime import datetime, timezone
import itertools
import logging
import subprocess

from ...handles.postgres.database import create_session
from ..helpers import get_constant_alias
from ..models.manager import ModelCRUD
from ..models.schemas import ModelCreateFinetuned
from ..models.utils import save_model_to_filesystem
from .manager import RunCRUD, RunModelCRUD
from .data_schemas import RunUpdate, RunModelCreate
from .dag_schemas import DAGNode, BuildDAG
from config import settings

PSQL_TABLE_ALIAS = settings.database.psql.TABLE_ALIAS


class DAGRun:
    def __init__(self, run_id: dict):
        self.db_session = create_session()
        self.db = RunCRUD(self.db_session)
        # TODO: Add error logging
        self.run_obj = self.db.get(id=run_id)
        self.run_id = run_id
        self.db.update(
            run_id, RunUpdate(status=1, started_at=datetime.now(timezone.utc))
        )

        self.pipeline_config = self.run_obj.dags
        self.state_dict = {}

        # TODO: Add custom exception and interrupt run
        try:
            self.dag = BuildDAG(config=self.pipeline_config).graph
            self.exec_buckets = {
                key: [elem[0] for elem in gp]
                for key, gp in itertools.groupby(
                    sorted(self.dag.direction.items(), key=lambda x: x[1]),
                    key=lambda x: x[1],
                )
            }
        except Exception as e:
            self.db.update(
                run_id,
                RunUpdate(
                    status=3,
                    finished_at=datetime.now(timezone.utc),
                    meta={"error": str(e)},
                ),
            )
            raise e

        Path(osp.join(settings.LOG_DIR, "runs")).mkdir(exist_ok=True, parents=True)
        self.log_path = osp.join(settings.LOG_DIR, "runs", f"{self.run_id}.log")
        logging.basicConfig(
            filename=self.log_path,
            format="%(asctime)s - %(message)s",
            datefmt="%m/%d/%Y %H:%M:%S",
            level=logging.INFO,
        )
        self.logger = logging.getLogger(__name__)

        self.node_configs = {}
        self.running_process = {}

        self.execute()
        self.db.update(
            run_id, RunUpdate(status=2, finished_at=datetime.now(timezone.utc))
        )

    def __del__(self):
        self.db_session.remove()
        for proc in self.running_process.values():
            proc.kill()

    def update_run(self, node_id: int, status: int):
        self.node_configs[node_id]["data"]["run_info"] = {
            "status": status,
            "status_alias": None,
            "message": None,
        }
        self.node_configs[node_id]["data"]["run_info"][
            "status_alias"
        ] = get_constant_alias(
            table_name=PSQL_TABLE_ALIAS.Run,
            column_name="status",
            value=status,
        )
        self.db.update(
            self.run_id,
            RunUpdate(
                dags=self.pipeline_config,
                status=status,
                finished_at=datetime.now(timezone.utc),
            ),
        )

    def interrupt_run(self, node: DAGNode, message: str):
        self.update_run(node.id, status=3)
        raise Exception(message)

    def find_node_config(self, node: DAGNode):
        node_cfg = None
        for node_cfg in self.pipeline_config["pipeline"]["nodes"]:
            if node_cfg["data"]["id"] == node.id:
                break

        if node_cfg is None:
            message = f"Node '{node.node_name}' doesn't exist in the pipeline"
            self.logger.critical(message)
            self.interrupt_run(node, message)
        return node_cfg

    def build_args(self, node: DAGNode):
        args = []
        base_model = None
        stage = None
        for _, prop in node.properties.items():
            # TODO: Handle skip if none and stor_true properly. Since popen needs string, None values might be converted to str.
            if (
                prop["value"] is None
                and (prop["type"] in [0, 1] or prop["skip_if_null"])
                or prop["value"] is False
                and prop["arg_only"]
            ):
                continue
            if prop["ref"] is None:
                if not prop["arg_only"]:
                    args += [f'--{prop["name"]}', str(prop["value"])]
                else:
                    args.append(f'--{prop["name"]}')
                continue

            ref_node = prop["ref"].split(".")[0]

            if ref_node not in self.dag.direction:
                message = f"Node '{node.node_name}' failure. Parent node '{self.dag.nodes[ref_node].node_name}' not found."
                self.logger.critical(message)
                self.interrupt_run(node, message)

            if prop["ref"] not in self.state_dict:
                message = f"Node '{node.node_name}' failure. Output #{prop['ref'].split('.')[-1]} from parent node not available."
                self.logger.critical(message)
                self.interrupt_run(node, message)

            if not prop["arg_only"]:
                args += [f'--{prop["name"]}', str(self.state_dict[prop["ref"]])]
            else:
                args.append(f'--{prop["name"]}')

            if prop["name"] == "base_model":
                base_model = prop["old_value"]
            elif prop["name"] == "stage":
                stage = prop["value"]

        c_args, save_dir = self.get_node_specific_args(node)
        args += c_args
        return args, save_dir, base_model, stage

    def get_node_specific_args(self, node: DAGNode):
        # TODO: Implement cache layer to get outputs
        save_dir = osp.join(
            settings.TRAIN_DIR,
            datetime.now().strftime("%Y-%m-%d"),
            str(self.run_id),
        )
        args = ["--run_id", self.run_id]
        if node.category_id == 0:
            args += [
                "--save_to_dir",
                save_dir,
                "--save_report_to",
                "wandb",
                "--wandb_project_name",
                node.family_name,
                "--wandb_group_name",
                node.node_name,
                "--wandb_run_name",
                self.run_id,
            ]
        return args, save_dir

    def spawn_daemon_process(self, command: list):
        with open(self.log_path, "a") as log_file:
            # TODO: Add error handling
            process = subprocess.Popen(command, stdout=log_file, stderr=log_file)
        return process

    def run_node(self, node: DAGNode):
        self.node_configs[node.id] = self.find_node_config(node)

        args, save_dir, base_model, stage = self.build_args(node)

        error = None
        if node.cmd:
            command = list(
                itertools.chain.from_iterable(
                    [part.split("=") for part in node.cmd.split()]
                )
            )
        elif node.script:
            if node.script.endswith(".py"):
                command = [settings.PYTHON_ENV, node.script]
            elif node.script.endswith(".sh"):
                command = ["/bin/bash", node.script]
            else:
                error = f"Node '{node.node_name}' failure. Couldn't identify execution strategy."
        else:
            error = f"Node '{node.node_name}' failure. Couldn't identify execution strategy."

        if error:
            self.logger.critical(error)
            self.interrupt_run(node, error)

        command += args
        self.logger.info("Command: %s", command)
        self.running_process[node.id] = self.spawn_daemon_process(command)
        self.running_process[node.id].wait()

        # TODO: Run output to node output
        if node.category_id == 0:
            for output in self.node_configs[node.id]["data"]["outputs"]:
                if output["type"] == 6:
                    if node.node_id == 0:
                        model_type = 2
                    elif node.node_id == 1:
                        model_type = 0
                    # TODO: Delete model object
                    # TODO: Fetch model name from node inputs? Validate model name uniqueness
                    model_id = save_model_to_filesystem(save_dir)
                    model_obj = ModelCRUD(self.db_session)
                    model_obj.create(
                        ModelCreateFinetuned(
                            name=self.run_obj.name,
                            type=model_type,
                            source_type=1,
                            family=node.family_id,
                            base_model_id=base_model,
                            is_finetuned=True,
                        ),
                        model_id=model_id,
                    )
                    run_model_obj = RunModelCRUD(self.db_session)
                    run_model_obj.create(
                        RunModelCreate(run_id=self.run_id, model_id=model_id)
                    )
                    output["value"] = model_id
                    self.state_dict[output["id"]] = model_id
        self.update_run(node.id, status=1)

    def execute(self):
        for ordinal in sorted(self.exec_buckets):
            for node_id in self.exec_buckets[ordinal]:
                self.run_node(self.dag.nodes[node_id])
