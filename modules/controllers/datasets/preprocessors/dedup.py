from __future__ import annotations

from typing import Any
from typing import Callable
from typing import Dict
from typing import List
from typing import Set
from typing import Tuple
from typing import Text

import ray
import datasets
import re
import numpy as np

from functools import partial
from collections import defaultdict
from itertools import count
from itertools import tee
from tqdm import tqdm
from scipy.integrate import quad as integrate

from .utils.union_find import UnionFind
from .utils.hashing import sha1_hash, xxh3_16hash, xxh3_32hash


SEED = 42
NON_ALPHA = re.compile(r"\W", re.UNICODE)
datasets.logging.set_verbosity_error()

HASH_CONFIG: Dict[int, Tuple[type, Any, Any]] = {
    64: (np.uint64, np.uint32((1 << 32) - 1), np.uint64((1 << 61) - 1)),
    32: (np.uint32, np.uint32((1 << 32) - 1), np.uint32((1 << 32) - 5)),
    16: (np.uint16, np.uint16((1 << 16) - 1), np.uint16((1 << 16) - 15)),
}


def ngrams(sequence: List[Text], n: int, min_length: int = 5):
    """
    Return the ngrams generated from a sequence of items, as an iterator.
    """
    if len(sequence) < min_length:
        return []
    if len(sequence) < n:
        return [tuple(sequence)]
    iterables = tee(iter(sequence), n)
    for i, sub_iterable in enumerate(iterables):
        for _ in range(i):
            next(sub_iterable, None)
    return zip(*iterables)


def optimal_param(
    threshold: float,
    num_perm: int,
    false_positive_weight: float = 0.5,
    false_negative_weight: float = 0.5,
):
    """
    Compute the optimal `MinHashLSH` parameter that minimizes the weighted sum
    of probabilities of false positive and false negative, taken from datasketch.
    """

    def false_positive_area(threshold: float, b: int, r: int):
        """Source: `datasketch.lsh`"""

        def proba(s):
            return 1 - (1 - s ** float(r)) ** float(b)

        a, _ = integrate(proba, 0.0, threshold)
        return a

    def false_negative_area(threshold: float, b: int, r: int):
        """Source: `datasketch.lsh`"""

        def proba(s):
            return 1 - (1 - (1 - s ** float(r)) ** float(b))

        a, _ = integrate(proba, threshold, 1.0)
        return a

    min_error = float("inf")
    opt = (0, 0)
    for b in range(1, num_perm + 1):
        max_r = int(num_perm / b)
        for r in range(1, max_r + 1):
            fp = false_positive_area(threshold, b, r)
            fn = false_negative_area(threshold, b, r)
            error = fp * false_positive_weight + fn * false_negative_weight
            if error < min_error:
                min_error = error
                opt = (b, r)
    return opt


def embed_func(
    row,
    content_column: str,
    id_column: str,
    *,
    num_perm: int,
    ngram_size: int,
    min_length: int,
    hashranges: List[Tuple[int, int]],
    permutations: np.ndarray,
    hash_func: Callable,
    dtype: type,
    max_hash: np.uint,
    modulo_prime: np.uint,
):
    a, b = permutations
    tokens: Set[bytes] = {
        bytes(" ".join(t).lower(), "utf-8")
        for t in ngrams(NON_ALPHA.split(row[content_column]), ngram_size, min_length)
    }

    hashvalues: np.ndarray = np.array(
        [hash_func(token) for token in tokens], dtype=dtype
    ).reshape(len(tokens), 1)
    hashvalues = (hashvalues * a + b) % modulo_prime & max_hash
    masks: np.ndarray = np.full(shape=num_perm, dtype=dtype, fill_value=max_hash)
    hashvalues = np.vstack([hashvalues, masks]).min(axis=0)
    Hs: List[bytes] = [bytes(hashvalues[start:end].data) for start, end in hashranges]
    return {"__signatures__": Hs, "__id__": row[id_column]}


def batch_embed_func(
    rows: str,
    content_column: str,
    id_column: str,
    *,
    num_perm: int,
    ngram_size: int,
    min_length: int,
    hashranges: List[Tuple[int, int]],
    permutations: np.ndarray,
    hash_func: Callable,
    dtype: type,
    max_hash: np.uint,
    modulo_prime: np.uint,
) -> Dict[str, Any]:
    """
    Calculate hash values for the content.

    Parameters
    ----------
    rows : dict
        The dataset rows to process.
    content_column : str
        The column of the dataset row to be embedded.
    id_column : str
        The index column of the dataset row.
    num_perm : int
        The number of permutations.
    ngram_size : int
        The size of n-grams.
    min_length : int
        The minimum length of the document in terms of tokens.
    hashranges : List[Tuple[int, int]]
        The ranges of hash values.
    permutations : np.ndarray
        The permutations for the minhash.
    hash_func : Callable
        The hash function to use.

    Returns
    -------
    Dict[str, Any]
        The hash values in each range and the index.
    """

    rows = ray.data.from_pandas(rows)
    return rows.map(
        partial(
            embed_func,
            content_column=content_column,
            id_column=id_column,
            num_perm=num_perm,
            ngram_size=ngram_size,
            min_length=min_length,
            hashranges=hashranges,
            permutations=permutations,
            hash_func=hash_func,
            dtype=dtype,
            max_hash=max_hash,
            modulo_prime=modulo_prime,
        ),
    ).to_pandas()


def load_hf_dataset(dataset_name):
    hf_dataset = datasets.load_dataset(dataset_name)
    for split in hf_dataset:
        yield ray.data.from_huggingface(hf_dataset[split])


def load_dataset_from_filesystem(dataset_path):
    yield None


def minhash_dedup(
    dataset,
    content_column,
    id_column="__id__",
    hash_bits=32,
    hash_algo="sha1",
    ngram_size=5,
    min_length=5,
    seed=SEED,
    num_perm=256,
    bands=None,
    rows=None,
    threshold=0.7,
):
    DTYPE, MAX_HASH, MODULO_PRIME = HASH_CONFIG.get(hash_bits, HASH_CONFIG[32])
    RNG = np.random.RandomState(seed)
    if bands is not None and rows is not None:
        BANDS, ROWS = bands, rows
    else:
        BANDS, ROWS = optimal_param(
            threshold=threshold,
            num_perm=num_perm,
            false_negative_weight=0.5,
            false_positive_weight=0.5,
        )

    match hash_algo:
        case "sha1":
            hash_func = partial(sha1_hash, d=min(hash_bits, 32))
        case "xxh3":
            if hash_bits == 16:
                hash_func = xxh3_16hash
            else:
                hash_func = xxh3_32hash

    HASH_RANGES = [(i * ROWS, (i + 1) * ROWS) for i in range(BANDS)]
    HASH_TABLES: List[Dict[int, Set]] = [defaultdict(set) for _ in range(BANDS)]

    for ray_dataset in load_hf_dataset(dataset):
        uf = UnionFind()
        columns = ray_dataset.columns()
        if id_column not in columns:
            counter = count(0)
            ray_dataset = ray_dataset.add_column("__id__", lambda x: [next(counter) for _ in range(len(x))])
        else:
            ray_dataset = ray_dataset.add_column("__id__", lambda x: x[id_column])
        id_column = "__id__"

        PERMUTATIONS: Tuple[np.ndarray, np.ndarray] = (
            RNG.randint(
                1, MODULO_PRIME, size=(num_perm,), dtype=DTYPE
            ),  # a is a multiplier so should not be 0
            RNG.randint(0, MODULO_PRIME, size=(num_perm,), dtype=DTYPE),  # b
        )

        embeds = ray_dataset.map_batches(
            batch_embed_func,
            fn_kwargs={
                "content_column": content_column,
                "id_column": id_column,
                "num_perm": num_perm,
                "ngram_size": ngram_size,
                "min_length": min_length,
                "hashranges": HASH_RANGES,
                "permutations": PERMUTATIONS,
                "hash_func": hash_func,
                "dtype": DTYPE,
                "max_hash": MAX_HASH,
                "modulo_prime": MODULO_PRIME,
            },
            batch_format="pandas",
        )


if __name__ == "__main__":
    minhash_dedup("knowrohit07/know_sql", "question")
