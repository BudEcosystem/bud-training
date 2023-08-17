from os import path as osp
from datetime import datetime
import itertools
import logging
import subprocess

from .dag_schemas import DAGNode, BuildDAG
from config import settings


class DAGRun:
    def __init__(self, pipeline_config: dict):
        self.pipeline_config = pipeline_config
        self.state_dict = {}

        self.run_id = self.register_run()

        # TODO: Add custom exception and interrupt run
        self.dag = BuildDAG(config=pipeline_config).graph
        self.exec_buckets = {
            key: [elem[0] for elem in gp]
            for key, gp in itertools.groupby(
                sorted(self.dag.direction.items(), key=lambda x: x[1]),
                key=lambda x: x[1],
            )
        }

        self.log_path = osp.join(settings.LOG_DIR, "runs", f"{self.run_id}.log")
        self.logger = logging.basicConfig(
            filename=self.log_path,
            format="%(asctime)s - %(message)s",
            datefmt="%m/%d/%Y %H:%M:%S",
            level=logging.INFO,
        )

    def register_run(self):
        pass

    def update_run():
        pass

    def pre_run_callback(self, node: DAGNode, node_config: dict):
        pass

    def post_run_callback(self, node: DAGNode, node_config: dict):
        pass

    def interrupt_run(self, node: DAGNode, message: str):
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
        for _, prop in node.properties.items():
            if prop["ref"] is None:
                args += [prop["name"], prop["value"]]
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

            args += [prop["name"], self.state_dict[prop["ref"]]]

        args.extend(self.get_node_specific_args(node))
        return args

    def get_node_specific_args(self, node: DAGNode):
        args = ["--run_id", self.run_id]
        if node.category_id == 0:
            args += [
                "--save_to_dir",
                osp.join(
                    settings.TRAIN_DIR,
                    datetime.now().strftime("%Y-%m-%d"),
                    str(args.run_id),
                ),
                "--save_report_to",
                "wandb",
                "--wandb_project_name",
                node.family_name,
                "--wandb_group_name",
                node.node_name,
                "--wandb_run_name",
                self.run_id,
            ]
        return args

    def spawn_daemon_process(self, command: list):
        with open(self.log_path, "a") as log_file:
            process = subprocess.Popen(command, stdout=log_file, stderr=log_file)
        return process

    def run_node(self, node: DAGNode):
        node_config = self.find_node_config(node.id)
        self.pre_run_callback(node, node_config)

        args = self.build_args(node)

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
        process = self.spawn_daemon_process(command)
        process.wait()

        self.post_run_callback(node, node_config)

    def __call__(self):
        for ordinal in sorted(self.exec_buckets):
            for node_id in self.exec_buckets[ordinal]:
                self.run_node(self.dag.nodes[node_id])
