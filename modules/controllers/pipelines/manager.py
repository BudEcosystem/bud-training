from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError as AlchemyIntegrityError
from pydantic.types import UUID4
from fastapi import Depends
from typing import List

from ...handles.postgres.models import Pipelines, Runs, RunsnModels
from ...handles.postgres.crud import BaseCRUD
from . import data_schemas as schemas
from .utils import random_name_generator
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

    def create(self, obj: schemas.Pipeline) -> Runs:
        db_obj = self.model(
            **schemas.RunCreate(
                pipeline_id=obj.pipeline_id,
                name=random_name_generator(),
                dags=obj.dags,
                status=0,
            ).dict(),
        )
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

    def assert_is_name_unique(self, name: str) -> bool:
        if self.db_session.query(self.model).filter_by(name=name).first():
            raise CustomHttpException(
                status_code=412, detail=f"Name {name} already exists."
            )
        else:
            return True

    def get_latest_pipeline_run(self, pipeline_id: UUID4) -> Runs:
        return (
            self.db_session.query(self.model)
            .filter_by(pipeline_id=pipeline_id)
            .order_by(self.model.modified_at)
            .first()
        )

    def get_pipeline_runs(
        self, pipeline_id: UUID4, page: int = 1, limit: int = 100
    ) -> List[Runs]:
        skip = (page - 1) * limit
        return (
            self.db_session.query(self.model)
            .filter_by(pipeline_id=pipeline_id)
            .offset(skip)
            .limit(limit)
            .all()
        )


class RunModelCRUD(BaseCRUD[RunsnModels, schemas.RunModelCreate, None]):
    __model__ = RunsnModels

    def __init__(self, db_session: Session):
        super().__init__(model=self.__model__, db_session=db_session)


def get_pipeline_crud(
    db_session: Session = Depends(get_session),
) -> PipelineCRUD:
    return PipelineCRUD(db_session)


def get_run_crud(
    db_session: Session = Depends(get_session),
) -> RunCRUD:
    return RunCRUD(db_session)


def get_run_n_model_crud(
    db_session: Session = Depends(get_session),
) -> RunModelCRUD:
    return RunModelCRUD(db_session)
