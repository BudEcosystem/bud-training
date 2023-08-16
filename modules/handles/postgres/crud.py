from typing import Any, Generic, List, Optional, Type, TypeVar
from pydantic import BaseModel

from sqlalchemy.exc import IntegrityError as AlchemyIntegrityError
from sqlalchemy.orm import Session

from utils.exceptions import CustomHttpException
from sqlalchemy.orm import Session

from . import models
from utils.loggers import get_logger


logger = get_logger("module_log")


ModelType = TypeVar("ModelType", bound=models.Base)
CreateSchemaType = TypeVar("CreateSchemaType", bound=BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=BaseModel)


class BaseCRUD(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    def __init__(self, model: Type[ModelType], db_session: Session):
        self.model = model
        self.db_session = db_session

    def get(self, id: Any) -> Optional[ModelType]:
        db_obj: Optional[ModelType] = self.db_session.query(self.model).get(id)
        if db_obj is None:
            raise CustomHttpException(
                status_code=404, detail=f"No data exist for id '{id}'"
            )
        return db_obj

    def list(self, page: int = 1, limit: int = 100) -> List[ModelType]:
        skip = (page - 1) * limit
        objs: List[ModelType] = (
            self.db_session.query(self.model).offset(skip).limit(limit).all()
        )
        return objs

    def create(self, obj: CreateSchemaType) -> ModelType:
        db_obj: ModelType = self.model(**obj.dict())
        self.db_session.add(db_obj)
        try:
            self.db_session.commit()
        except AlchemyIntegrityError as e:
            self.db_session.rollback()
            if "duplicate key" in str(e):
                raise CustomHttpException(
                    status_code=409, detail="Duplicate entry found"
                )
            else:
                raise e
        self.db_session.refresh(db_obj)
        return db_obj

    def update(self, id: Any, obj: UpdateSchemaType) -> Optional[ModelType]:
        db_obj: Optional[ModelType] = self.get(id)
        if db_obj is None:
            raise CustomHttpException(
                status_code=404, detail=f"No data exist for id '{id}'"
            )
        for column, value in obj.dict(exclude_unset=True).items():
            setattr(db_obj, column, value)
        self.db_session.commit()
        self.db_session.refresh(db_obj)
        return db_obj

    def delete(self, id: Any) -> None:
        db_obj: Optional[ModelType] = self.db_session.query(self.model).get(id)
        if db_obj is None:
            raise CustomHttpException(
                status_code=404, detail=f"No data exist for id '{id}'"
            )
        self.db_session.delete(db_obj)
        self.db_session.commit()
