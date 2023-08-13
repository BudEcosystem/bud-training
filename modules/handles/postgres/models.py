from uuid import uuid4
from sqlalchemy import (
    Column,
    DateTime,
    Integer,
    String,
    Boolean,
    ForeignKey,
    JSON,
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.compiler import compiles
from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import FunctionElement
from sqlalchemy.ext.declarative import declarative_base

from .helpers import RepresentableBase
from . import TABLE_ALIAS


Base = declarative_base(cls=RepresentableBase)


class UtcNow(FunctionElement):
    """Custom Datetime column type"""

    type = DateTime()


@compiles(UtcNow, "postgresql")
def pg_utc_now(element, compiler, **kw):
    """Compiles UtcNow column type as current utc timestamp"""
    return "TIMEZONE('utc', CURRENT_TIMESTAMP)"


class Datasets(Base):
    __tablename__ = TABLE_ALIAS["Dataset"]
    dataset_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = Column(String, nullable=False)
    source = Column(String, nullable=True) # HF name, folder/file path
    source_type = Column(String, nullable=False) # Hugginface, custom
    type = Column(Integer, nullable=False) # Text, Text & Image
    pipelines = relationship("Pipelines", back_populates="dataset")
    created_at = Column(DateTime(timezone=True), server_default=UtcNow())
    modified_at = Column(DateTime(timezone=True), server_default=UtcNow(), onupdate=UtcNow())


class Models(Base):
    __tablename__ = TABLE_ALIAS["Model"]
    model_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = Column(String, nullable=False)
    source = Column(String, nullable=True) # HF name, folder/file path
    type = Column(Integer, nullable=False) # LLM, SD
    is_finetuned = Column(Boolean, default=False)
    pipelines = relationship("Pipelines", back_populates="model")
    created_at = Column(DateTime(timezone=True), server_default=UtcNow())
    modified_at = Column(DateTime(timezone=True), server_default=UtcNow(), onupdate=UtcNow())


class Pipelines(Base):
    __tablename__ = TABLE_ALIAS["Pipeline"]
    pipeline_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    dataset_id = Column(UUID(as_uuid=True), ForeignKey(f"{TABLE_ALIAS['Dataset']}.dataset_id"))
    base_model_id = Column(UUID(as_uuid=True), ForeignKey(f"{TABLE_ALIAS['Model']}.model_id"))
    name = Column(String, nullable=False)
    type = Column(Integer, nullable=False) # LLM LoRA, SD LoRA, SD Dreambooth
    params = Column(JSON, nullable=False)
    dataset = relationship("Datasets", foreign_keys=[dataset_id], back_populates="pipelines")
    model = relationship("Models", foreign_keys=[base_model_id], back_populates="pipelines")
    runs = relationship("Runs", back_populates="pipeline")
    created_at = Column(DateTime(timezone=True), server_default=UtcNow())
    modified_at = Column(DateTime(timezone=True), server_default=UtcNow(), onupdate=UtcNow())


class Runs(Base):
    __tablename__ = TABLE_ALIAS["Run"]
    run_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    piepline_id = Column(UUID(as_uuid=True), ForeignKey(f"{TABLE_ALIAS['Pipeline']}.pipeline_id"))
    dataset_id = Column(UUID(as_uuid=True), ForeignKey(f"{TABLE_ALIAS['Dataset']}.dataset_id"))
    base_model_id = Column(UUID(as_uuid=True), ForeignKey(f"{TABLE_ALIAS['Model']}.model_id"))
    name = Column(String, nullable=False)
    type = Column(Integer, nullable=False) # LLM LoRA, SD LoRA, SD Dreambooth
    params = Column(JSON, nullable=False)
    source = Column(String, nullable=False) # Folder/Blob path
    results = Column(JSON, default={}) # Training results (loss, acc etc...)
    status = Column(Integer, default=0) # Queued, Running, Finished, Failed, Stopped
    pipeline = relationship("Pipelines", foreign_keys=[piepline_id], back_populates="runs")
    dataset = relationship("Datasets", foreign_keys=[dataset_id])
    base_model = relationship("Models", foreign_keys=[base_model_id])
    started_at = Column(DateTime(timezone=True))
    finished_at = Column(DateTime(timezone=True))
    created_at = Column(DateTime(timezone=True), server_default=UtcNow())
    modified_at = Column(DateTime(timezone=True), server_default=UtcNow(), onupdate=UtcNow())


class RunsnModels(Base):
    __tablename__ = TABLE_ALIAS["Run and Model"]
    id = Column(Integer, primary_key=True)
    run_id = Column(UUID(as_uuid=True), ForeignKey(f"{TABLE_ALIAS['Run']}.run_id"))
    model_id = Column(UUID(as_uuid=True), ForeignKey(f"{TABLE_ALIAS['Model']}.model_id"))
    run = relationship("Runs", foreign_keys=[run_id])
    model = relationship("Models", foreign_keys=[model_id])
    created_at = Column(DateTime(timezone=True), server_default=UtcNow())
    modified_at = Column(DateTime(timezone=True), server_default=UtcNow(), onupdate=UtcNow())


class ServingHistory(Base):
    __tablename__ = TABLE_ALIAS["Serving History"]
    serving_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    model_id = Column(UUID(as_uuid=True), ForeignKey(f"{TABLE_ALIAS['Model']}.model_id"))
    endpoint = Column(String, nullable=False)
    log_path = Column(String, nullable=True)
    status = Column(Integer, default=0) # Idle, Running, Failed
    model = relationship("Models", foreign_keys=[model_id])
    started_at = Column(DateTime(timezone=True))
    stopped_at = Column(DateTime(timezone=True))
    created_at = Column(DateTime(timezone=True), server_default=UtcNow())
    modified_at = Column(DateTime(timezone=True), server_default=UtcNow(), onupdate=UtcNow())