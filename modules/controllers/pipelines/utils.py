from os import path as osp
import random
import string

from ...handles.postgres.database import create_session
from ..datasets import DatasetCRUD
from ..models.manager import ModelCRUD
from ..datasets.utils import is_valid_hf_dataset
from ..models.utils import validate_model_path
from utils.factory import fetch_word_list
from config import settings


def validate_property_value_by_type(ptype, value):
    type_definitions = {
        0: int,
        1: float,
        2: str,
        3: bool,
        4: str,
        5: fetch_dataset_path_by_id,
        6: fetch_model_path_by_id,
    }
    ptype = int(ptype)
    # TODO: Add required bool field to handle nulls
    if ptype in type_definitions:
        value = type_definitions[ptype](value) if value is not None else value
    else:
        raise ValueError(f"Type '{ptype}' is not supported")
    return value


def fetch_dataset_path_by_id(dataset_id):
    db_session = create_session()
    db = DatasetCRUD(db_session)

    db_obj = db.get(dataset_id)
    if db_obj.source_type == 1:
        dataset_path = osp.join(settings.DATA_DIR, str(db_obj.dataset_id))
        assert osp.isdir(dataset_path), f"Dataset path not found for '{dataset_id}'"
    elif db_obj.source_type == 0:
        dataset_path = db_obj.source
        is_valid_hf_dataset(dataset_path)
    else:
        raise ValueError("Couldn't recognize dataset source")

    db_session.remove()
    return str(dataset_path)


def fetch_model_path_by_id(model_id):
    db_session = create_session()
    db = ModelCRUD(db_session)

    db_obj = db.get(model_id)
    if db_obj.source_type == 1:
        model_path = osp.join(settings.DATA_DIR, str(db_obj.model_id))
        assert osp.isdir(model_path), f"Model path not found for '{model_id}'"
    elif db_obj.source_type == 0:
        model_path = db_obj.source
        # Change
        validate_model_path(model_path)
    else:
        raise ValueError("Couldn't recognize model source")

    db_session.remove()
    return str(model_path)


def random_string_generator(size=6, string=string.ascii_letters + string.digits):
    return "".join(random.choice(string) for _ in range(size))


def random_name_generator():
    name_words = fetch_word_list(osp.join(settings.CACHE_DIR, "word_list.json"))
    name = "-".join(
        [name_words[random.randint(0, len(name_words) - 1)] for _ in range(2)]
    )
    return name + f"-{random_string_generator()}"
