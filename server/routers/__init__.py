from collections.abc import Callable
from typing import Any

from fastapi.responses import Response
from fastapi.dependencies.utils import get_typed_return_annotation, lenient_issubclass
from fastapi.routing import APIRoute, Default, DefaultPlaceholder


class CustomAPIRoute(APIRoute):
    def __init__(
        self,
        path: str,
        endpoint: Callable[..., Any],
        *,
        response_model: Any = Default(None),
        **kwargs: Any,
    ) -> None:
        # We need this part to ensure we get the response model,
        # even if it is just set as an annotation on the handler function.
        if isinstance(response_model, DefaultPlaceholder):
            return_annotation = get_typed_return_annotation(endpoint)
            if lenient_issubclass(return_annotation, Response):
                response_model = None
            else:
                response_model = return_annotation
        # Find the fields to exclude:
        if response_model is not None:
            kwargs["response_model_exclude"] = {
                name
                for name, field in response_model.__fields__.items()
                if hasattr(field, "extra") and field.extra.get("hidden") is True
            }
        super().__init__(path, endpoint, response_model=response_model, **kwargs)
