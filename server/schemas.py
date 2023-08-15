from typing import Generic, TypeVar
from pydantic import BaseModel


DataType = TypeVar("DataType")


class ResponseBase(BaseModel, Generic[DataType]):
    status: bool = True
    message: str | None = None
    meta: dict = {}
    data: DataType | None = None
