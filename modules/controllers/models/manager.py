from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError as AlchemyIntegrityError
from pydantic.types import UUID4
from fastapi import Depends

from ...handles.postgres.models import Models
from ...handles.postgres.crud import BaseCRUD
from . import schemas
from modules.handles.postgres.database import get_session
from utils.exceptions import CustomHttpException


class ModelCRUD(BaseCRUD[Models, schemas.ModelCreate, schemas.ModelUpdate]):
    __model__ = Models

    def __init__(self, db_session: Session):
        super().__init__(model=self.__model__, db_session=db_session)

    def create(self, obj: schemas.ModelCreate, model_id: UUID4 | None = None) -> Models:
        if self.db_session.query(self.__model__).filter_by(name=obj.name).first():
            raise CustomHttpException(
                status_code=412, detail=f"Name {obj.name} already exists."
            )
        if model_id:
            db_obj = self.model(**obj.dict(), model_id=model_id)
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

    def does_name_exists(self, obj: schemas.ModelCreate) -> bool:
        if self.db_session.query(self.__model__).filter_by(name=obj.name).first():
            raise CustomHttpException(
                status_code=412, detail=f"Name {obj.name} already exists."
            )
        else:
            return True


def get_model_crud(
    db_session: Session = Depends(get_session),
) -> ModelCRUD:
    return ModelCRUD(db_session)
