from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError as AlchemyIntegrityError
from pydantic.types import UUID4
from fastapi import Depends

from ...handles.postgres.models import Datasets
from ...handles.postgres.crud import BaseCRUD
from . import schemas
from modules.handles.postgres.database import get_session
from utils.exceptions import CustomHttpException


class DatasetCRUD(BaseCRUD[Datasets, None, schemas.DatasetUpdate]):
    __model__ = Datasets

    def __init__(self, db_session: Session):
        super().__init__(model=self.__model__, db_session=db_session)

    def create(
        self, obj: schemas.DatasetCreate, dataset_id: UUID4 | None = None
    ) -> Datasets:
        if dataset_id:
            db_obj = self.model(**obj.dict(), dataset_id=dataset_id)
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

    def get_dataset_by_type(self, dataset_type: int, page: int = 1, limit: int = 100):
        skip = (page - 1) * limit
        return (
            self.db_session.query(self.model)
            .filter(self.model.type == dataset_type)
            .offset(skip)
            .limit(limit)
            .all()
        )

    def assert_is_name_unique(self, name: str) -> bool:
        if self.db_session.query(self.model).filter_by(name=name).first():
            raise CustomHttpException(
                status_code=412, detail=f"Name {name} already exists."
            )
        else:
            return True


def get_dataset_crud(
    db_session: Session = Depends(get_session),
) -> DatasetCRUD:
    return DatasetCRUD(db_session)
