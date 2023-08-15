from pydantic import BaseModel, validator, model_validator
from pydantic.types import UUID4
from datetime import datetime

from . import TABLE_ALIAS
from .validations import validate_constants, get_constant_alias
from utils.exceptions import CustomHttpException


class DatasetCreate(BaseModel):
    name: str
    source: str | None = None
    source_type: int
    type: int

    @validator("name")
    def name_is_valid(cls, value: str) -> str:
        if not value.strip().strip('"').strip("'"):
            raise CustomHttpException(
                status_code=422, detail=f"'name' shouldn't be empty"
            )
        return value

    @validator("source_type")
    def source_type_is_valid(cls, value: str) -> str:
        if not validate_constants(
            table_name=TABLE_ALIAS["Dataset"], column_name="source_type", value=value
        ):
            raise CustomHttpException(
                status_code=422, detail=f"'source_type' doesn't support value '{value}'"
            )
        return value

    @validator("type")
    def type_is_valid(cls, value: str) -> str:
        if not validate_constants(
            table_name=TABLE_ALIAS["Dataset"], column_name="type", value=value
        ):
            raise CustomHttpException(
                status_code=422, detail=f"'type' doesn't support value '{value}'"
            )
        return value


class DatasetUpdate(BaseModel):
    name: str


class Dataset(BaseModel):
    dataset_id: UUID4
    name: str
    source: str | None = None
    source_type: int
    source_type_alias: str | None = None
    type: int
    type_alias: str | None = None
    created_at: datetime
    modified_at: datetime

    class Config:
        from_attributes = True

    @model_validator(mode="after")
    def validate_constant_aliases(self) -> "Dataset":
        self.source_type_alias = str(
            get_constant_alias(
                table_name=TABLE_ALIAS["Dataset"],
                column_name="source_type",
                value=self.source_type,
            )
        )
        self.type_alias = str(
            get_constant_alias(
                table_name=TABLE_ALIAS["Dataset"], column_name="type", value=self.type
            )
        )
        return self


class ModelCreate(BaseModel):
    name: str
    source: str | None = None
    type: int

    @validator("type")
    def type_is_valid(cls, value: str) -> str:
        if not validate_constants(
            table_name=TABLE_ALIAS["Model"], column_name="type", value=value
        ):
            raise CustomHttpException(
                status_code=422, detail=f"'type' doesn't support value '{value}'"
            )
        return value


class Model(BaseModel):
    model_id: UUID4
    name: str
    source: str | None = None
    type: int
    type_alias: str | None = None
    is_finetuned: bool
    created_at: datetime
    modified_at: datetime

    class Config:
        from_attributes = True

    @model_validator(mode="after")
    def validate_constant_aliases(self) -> "Model":
        self.type_alias = str(
            get_constant_alias(
                table_name=TABLE_ALIAS["Model"], column_name="type", value=self.type
            )
        )
        return self


class PipelineCreate(BaseModel):
    dataset_id: UUID4
    base_model_id: UUID4
    name: str
    type: int
    params: dict

    @validator("type")
    def type_is_valid(cls, value: str) -> str:
        if not validate_constants(
            table_name=TABLE_ALIAS["Pipeline"], column_name="type", value=value
        ):
            raise CustomHttpException(
                status_code=422, detail=f"'type' doesn't support value '{value}'"
            )
        return value


class Pipeline(BaseModel):
    pipeline_id: UUID4
    dataset_id: UUID4
    base_model_id: UUID4
    name: str
    type: int
    type_alias: str | None = None
    params: dict
    created_at: datetime
    modified_at: datetime

    class Config:
        from_attributes = True

    @model_validator(mode="after")
    def validate_constant_aliases(self) -> "Pipeline":
        self.type_alias = str(
            get_constant_alias(
                table_name=TABLE_ALIAS["Pipeline"], column_name="type", value=self.type
            )
        )
        return self


class Run(BaseModel):
    run_id: UUID4
    pipeline_id: UUID4
    dataset_id: UUID4
    base_model_id: UUID4
    name: str
    type: int
    type_alias: str | None = None
    params: dict
    source: str  # local path will be displayed?
    metadata: dict
    status: int
    status_alias: str | None = None
    started_at: datetime
    finished_at: datetime
    created_at: datetime
    modified_at: datetime

    class Config:
        from_attributes = True

    @model_validator(mode="after")
    def validate_constant_aliases(self) -> "Run":
        self.type_alias = str(
            get_constant_alias(
                table_name=TABLE_ALIAS["Run"], column_name="type", value=self.type
            )
        )
        self.status_alias = str(
            get_constant_alias(
                table_name=TABLE_ALIAS["Run"], column_name="status", value=self.status
            )
        )
        return self


class RunModel(BaseModel):
    run_id: UUID4
    model_id: UUID4
    created_at: datetime
    modified_at: datetime

    class Config:
        from_attributes = True


class Serving(BaseModel):
    serving_id: UUID4
    model_id: UUID4
    created_at: datetime
    modified_at: datetime

    class Config:
        from_attributes = True


class ServingHistory(BaseModel):
    serving_id: UUID4
    model_id: UUID4
    endpoint: str
    log_path: str  # Local path?
    status: int
    started_at: datetime
    stopped_at: datetime
    created_at: datetime
    modified_at: datetime

    class Config:
        from_attributes = True

    @model_validator(mode="after")
    def validate_constant_aliases(self) -> "ServingHistory":
        self.status_alias = str(
            get_constant_alias(
                table_name=TABLE_ALIAS["Serving History"],
                column_name="status",
                value=self.status,
            )
        )
        return self
