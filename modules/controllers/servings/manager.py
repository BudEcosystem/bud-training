from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError as AlchemyIntegrityError
from pydantic.types import UUID4
from fastapi import Depends

from ...handles.postgres.models import ServingHistory
from ...handles.postgres.crud import BaseCRUD
from . import schemas
from modules.handles.postgres.database import get_session
from utils.exceptions import CustomHttpException


class ServingCRUD(BaseCRUD[ServingHistory, schemas.ServingHistory, schemas.Serving]):
    __model__ = ServingHistory

    def __init__(self, db_session: Session):
        super().__init__(model=self.__model__, db_session=db_session)

    def create(self, obj: schemas.Serving, serving_id: UUID4 | None = None) -> ServingHistory:
       
        if serving_id:
            db_obj = self.model(**obj.dict(), serving_id=serving_id)
        else:
            db_obj = self.model(**obj.dict())
        self.db_session.add(db_obj)
        try:
            self.db_session.commit()
        except AlchemyIntegrityError as e:
            self.db_session.rollback()
            if "duplicate key" in str(e):
                raise CustomHttpException(status_code=409, detail="Conflict Error")
            else:
                raise e
        self.db_session.refresh(db_obj)
        return db_obj


def get_serving_crud(
    db_session: Session = Depends(get_session),
) -> ServingCRUD:
    return ServingCRUD(db_session)
