import shortuuid

from multiprocessing import Value, Lock
from uuid import uuid4


class Counter(object):
    def __init__(self, initval=0):
        self.val = Value("i", initval)
        self.lock = Lock()

    def increment(self):
        with self.lock:
            self.val.value += 1

    def value(self):
        with self.lock:
            return self.val.value


def generate_unique_id():
    return shortuuid.encode(uuid4())