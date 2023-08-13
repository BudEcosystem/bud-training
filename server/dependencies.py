from typing import Annotated
from sqlalchemy.orm import Session

from fastapi import Header, Depends, HTTPException

from modules.handles.postgres.database import get_session
import modules.handles.postgres.crud as psql_crud
from config import settings


async def validate_token_header(x_token: Annotated[str, Header()]):
    if x_token != settings.auth.X_TOKEN:
        raise HTTPException(status_code=401, detail="X-Token header invalid")


async def validate_auth_token(token: str):
    if token != "":
        raise HTTPException(status_code=401, detail="Authorization failed")


def get_dataset_crud(db_session: Session = Depends(get_session)) -> psql_crud.DatasetCRUD:
    return psql_crud.DatasetCRUD(db_session)