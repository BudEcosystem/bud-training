from functools import lru_cache
from datasets import load_dataset

from utils.exceptions import CustomHttpException
from config import settings


PSQL_CONSTANTS = settings.database.psql.CONSTANTS
PSQL_TABLE_ALIAS = settings.database.psql.TABLE_ALIAS


@lru_cache(maxsize=500)
def is_dataset_source_type_equals(source_type, value):
    table_name = PSQL_TABLE_ALIAS["Dataset"]
    column_name = "source_type"

    if source_type is None:
        return False

    return (
        str(
            PSQL_CONSTANTS.get(table_name, {})
            .get(column_name, {})
            .get(source_type, source_type)
        ).lower()
        == value.lower()
    )


def is_dataset_source_type_huggingface(value):
    return is_dataset_source_type_equals(value, "Hugging Face")


def is_dataset_source_type_local_upload(value):
    return is_dataset_source_type_equals(value, "Local Upload")


@lru_cache(maxsize=500)
def is_dataset_type_equals(_type, value):
    table_name = PSQL_TABLE_ALIAS["Dataset"]
    column_name = "type"

    if _type is None:
        return False

    return (
        str(
            PSQL_CONSTANTS.get(table_name, {}).get(column_name, {}).get(_type, _type)
        ).lower()
        == value.lower()
    )


def is_dataset_type_text_and_image(value):
    return is_dataset_type_equals(value, "Text & Image")


def is_valid_hf_dataset(dataset_id: str):
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
