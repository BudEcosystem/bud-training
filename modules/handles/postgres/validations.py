from functools import lru_cache

from . import TABLE_ALIAS, CONSTANTS


@lru_cache(maxsize=2000)
def get_constant_alias(table_name, column_name, value):
    if table_name not in CONSTANTS or column_name not in CONSTANTS[table_name]:
        return value
    return CONSTANTS[table_name][column_name].get(value, value)


@lru_cache(maxsize=2000)
def validate_constants(table_name, column_name, value):
    if table_name not in CONSTANTS or column_name not in CONSTANTS[table_name]:
        return True
    return value in CONSTANTS[table_name][column_name]


@lru_cache(maxsize=500)
def is_dataset_source_type_equals(source_type, value):
    table_name = TABLE_ALIAS["Dataset"]
    column_name = "source_type"

    if source_type is None:
        return False

    return (
        str(
            CONSTANTS.get(table_name, {})
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
    table_name = TABLE_ALIAS["Dataset"]
    column_name = "type"

    if _type is None:
        return False

    return (
        str(
            CONSTANTS.get(table_name, {}).get(column_name, {}).get(_type, _type)
        ).lower()
        == value.lower()
    )


def is_dataset_type_text_and_image(value):
    return is_dataset_type_equals(value, "Text & Image")
