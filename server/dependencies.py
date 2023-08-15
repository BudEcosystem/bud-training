from typing import Annotated, Type, TypeVar
from sqlalchemy.orm import Session

from pydantic import BaseModel, ValidationError
from fastapi import Header, Depends, Form, HTTPException
from fastapi.encoders import jsonable_encoder

from modules.handles.postgres.database import get_session
import modules.handles.postgres.crud as psql_crud
from config import settings


Serialized = TypeVar("Serialized", bound=BaseModel)


def form_json_deserializer(
    schema: Type[Serialized], data: str = Form(...)
) -> Serialized:
    """
    Helper to serialize request data not automatically included in an application/json body but
    within somewhere else like a form parameter. This makes an assumption that the form parameter with JSON data is called 'data'

    :param schema: Pydantic model to serialize into
    :param data: raw str data representing the Pydantic model
    :raises ValidationError: if there are errors parsing the given 'data' into the given 'schema'
    """
    try:
        return schema.model_validate_json(data)
    except ValidationError as e:
        raise HTTPException(status_code=422, detail=jsonable_encoder(e.errors()))


async def validate_token_header(x_token: Annotated[str, Header()]):
    if x_token != settings.auth.X_TOKEN:
        raise HTTPException(status_code=401, detail="X-Token header invalid")


async def validate_auth_token(token: str):
    if token != "":
        raise HTTPException(status_code=401, detail="Authorization failed")


def get_dataset_crud(
    db_session: Session = Depends(get_session),
) -> psql_crud.DatasetCRUD:
    return psql_crud.DatasetCRUD(db_session)
