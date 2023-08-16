from functools import lru_cache

from config import PSQL_CONSTANTS


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
