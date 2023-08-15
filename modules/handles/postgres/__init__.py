from utils.loggers import get_logger

logger = get_logger("module_log")


TABLE_ALIAS = {
    "Dataset": "datasets",
    "Model": "models",
    "Pipeline": "pipelines",
    "Node": "nodes",
    "Node Relation": "node_relations",
    "Run": "runs",
    "Run and Model": "runs_n_models",
    "Serving": "servings",
    "Serving History": "serving_history",
}
