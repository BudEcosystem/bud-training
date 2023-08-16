from functools import lru_cache

from config import PSQL_CONSTANTS, PSQL_TABLE_ALIAS


@lru_cache(maxsize=2000)
def get_constant_alias(table_name, column_name, value):
    if (
        table_name not in PSQL_CONSTANTS
        or column_name not in PSQL_CONSTANTS[table_name]
    ):
        return value
    return PSQL_CONSTANTS[table_name][column_name].get(value, value)


@lru_cache(maxsize=2000)
def validate_constants(table_name, column_name, value):
    if (
        table_name not in PSQL_CONSTANTS
        or column_name not in PSQL_CONSTANTS[table_name]
    ):
        return True
    return value in PSQL_CONSTANTS[table_name][column_name]


@lru_cache(maxsize=500)
def is_model_source_type_equals(source_type, value):
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


@lru_cache(maxsize=500)
def is_model_type_equals(_type, value):
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
