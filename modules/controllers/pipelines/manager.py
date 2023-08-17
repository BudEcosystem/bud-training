from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError as AlchemyIntegrityError
from pydantic.types import UUID4
from fastapi import Depends

from ...handles.postgres.models import Pipelines, Runs, RunsnModels
from ...handles.postgres.crud import BaseCRUD
from . import data_schemas as schemas
from modules.handles.postgres.database import get_session
from utils.exceptions import CustomHttpException


class PipelineCRUD(BaseCRUD[Pipelines, schemas.PipelineCreate, schemas.PipelineUpdate]):
    __model__ = Pipelines

    def __init__(self, db_session: Session):
        super().__init__(model=self.__model__, db_session=db_session)

    def assert_is_name_unique(self, name: str) -> bool:
        if self.db_session.query(self.model).filter_by(name=name).first():
            raise CustomHttpException(
                status_code=412, detail=f"Name {name} already exists."
            )
        else:
            return True


class RunCRUD(BaseCRUD[Runs, schemas.RunCreate, schemas.RunUpdate]):
    __model__ = Runs

    def __init__(self, db_session: Session):
        super().__init__(model=self.__model__, db_session=db_session)

    def assert_is_name_unique(self, name: str) -> bool:
        if self.db_session.query(self.model).filter_by(name=name).first():
            raise CustomHttpException(
                status_code=412, detail=f"Name {name} already exists."
            )
        else:
            return True


def get_pipeline_crud(
    db_session: Session = Depends(get_session),
) -> PipelineCRUD:
    return PipelineCRUD(db_session)
