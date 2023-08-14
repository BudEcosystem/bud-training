from datasets import load_dataset

from utils.exceptions import CustomHttpException


def is_valid_dataset(dataset_id: str):
    if not dataset_id:
        raise CustomHttpException(
            status_code=422,
            detail=f"dataset source can't be empty for Hugging Face datasets",
        )

    try:
        load_dataset(dataset_id, streaming=True)
    except FileNotFoundError:
        raise CustomHttpException(
            status_code=422,
            detail=f"Couldn't find '{dataset_id}' on the Hugging Face Hub. Either the dataset doesn't exist on the hub or the repo is private or gated.",
        )
