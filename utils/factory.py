from __future__ import annotations, unicode_literals

from hashlib import md5, sha1, sha256
import json
import random
import time
from types import SimpleNamespace
from typing import Any
from uuid import uuid4

from bson import ObjectId


def freeze(o: Any):
    """Converts dict to frozenset and list to tuple

    Args:
        o (Any): Object to freeze

    Returns:
        Any: Returns frozenset or tuple if o is dict or list respectively, for all other types it will be returned as such
    """
    if isinstance(o, dict):
        return frozenset({k: freeze(v) for k, v in o.items()}.items())

    if isinstance(o, list):
        return tuple([freeze(v) for v in o])

    return o


def make_hash(
    data: Any, algorithm: str = "sha1", serializer: str = None, sort: bool = False
):
    """Makes a hash out of anything that contains only list,dict and hashable types including string and numeric types

    Args:
        data (Any): Object for which hash is to be generated
        algorithm (str, optional): Hash algorithm to use. Defaults to "sha1".
        serializer (str, optional): Serializer to use. Supported values are json/freeze. Defaults to "json".
        sort (bool, optional): Whether to sort data before hashing. Defaults to False.

    Returns:
        str: Sha1/Sha256/Md5 hash in hex format
    """
    algos = {"sha1": sha1, "sha256": sha256, "md5": md5}

    if algorithm.lower() not in algos:
        ValueError(f"Algorithm '{algorithm}' is not supported")

    data = data or ""
    if sort:
        if isinstance(data, dict):
            data = dict(sorted(data).items())
        elif isinstance(data, list):
            data = sorted(data)
    if serializer == "json":
        data = data or {}
        data = serialize(data)
    elif serializer == "freeze":
        data = freeze(data)
    elif not serializer:
        data = data.encode("utf-8")
    else:
        raise ValueError(f"Unknown serializer {serializer}")

    return algos[algorithm.lower()](data).hexdigest()


def serialize(o: Any):
    """Json serialize the data

    Args:
        o (Any): Object for which hash is to be generated

    Returns:
        str: Json serialized data with utf-8 encoding
    """
    return json.dumps(o).encode("utf-8")


def generate_oid(serialize: bool = True):
    """Generate ObjectId

    Args:
        serialize (bool, optional): Defines whether the ObjectId needs to be type cast to str. Defaults to True.

    Returns:
        Union[str, ObjectId]: Generated ObjectId
    """
    return str(ObjectId()) if serialize else ObjectId()


def oid2str(oid: ObjectId):
    """Type cast ObjectId to str

    Args:
        oid (ObjectId): ObjectId to type cast

    Returns:
        str: string instance of the ObjectId
    """
    return str(oid)


def str2oid(string: str):
    """Type cast string to ObjectId

    Args:
        string (str): String to type cast

    Returns:
        ObjectId: ObjectId instance of the string
    """
    return ObjectId(string)


def generate_uuid():
    """Generate a randome uuid

    Returns:
        str: uuid4
    """
    return str(uuid4())


def generate_random_id():
    """Generate a random unique id

    Returns:
        str: md5 hash of the random number generated
    """
    t = time.time() * 1000
    r = random.random() * 100000000000000000
    a = random.random() * 100000000000000000

    data = str(t) + " " + str(r) + " " + str(a)
    return md5(data.encode("utf-8")).hexdigest()


class NestedNamespace(SimpleNamespace):
    """A simple factory for objectifying python dictionaries"""

    def __init__(self, dictionary, **kwargs):
        super().__init__(**kwargs)
        for key, value in dictionary.items():
            if isinstance(value, dict):
                self.__setattr__(key, NestedNamespace(value))
            elif isinstance(value, list):
                self.__setattr__(
                    key,
                    tuple(
                        map(
                            lambda val: NestedNamespace(val)
                            if type(val) in [dict, list]
                            else val,
                            value,
                        )
                    ),
                )
            else:
                self.__setattr__(key, value)
