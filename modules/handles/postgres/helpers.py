import io
import sys
import yaml
from os import path as osp
from functools import lru_cache
from reprlib import Repr as _Repr

from sqlalchemy import Table
from sqlalchemy import inspect
from sqlalchemy.ext.declarative import DeclarativeMeta


dirpath = osp.dirname(osp.realpath(__file__))


class Repr(_Repr):
    """Generates repr for a ORM class"""

    @classmethod
    def __table_cls__(cls, *args, **kwargs):
        t = Table(*args, **kwargs)
        t.decl_class = cls
        return t

    def repr(self, obj):
        """Get repr

        Args:
            obj (Any): Object to get repr for

        Returns:
            str: Repr for the object
        """
        if isinstance(obj.__class__, DeclarativeMeta):
            return self.repr_Base(obj, self.maxlevel)
        if sys.version_info < (3,):
            return _Repr.repr(self, obj)
        else:
            return super(Repr, self).repr(obj)

    def repr_Base(self, obj, level):
        """Generate repr for obj

        Args:
            obj (Any): Object to get repr for
            level (str): Level name

        Returns:
            str: Repr for the object
        """
        return "<%s %s>" % (self._repr_class(obj, level), self._repr_attrs(obj, level))

    def _repr_class(self, obj, level):
        """Get obj class name

        Args:
            obj (Any): Object to get class name for
            level (str): Level name

        Returns:
            str: Class name of obj
        """
        return obj.__class__.__name__

    def _repr_attrs(self, obj, level):
        """Get attributes of obj

        Args:
            obj (Any): Object to get attrs for
            level (str): Level name

        Returns:
            str: Comma separated attributes of obj
        """
        represented_attrs = []
        for attr in self._iter_attrs(obj):
            represented_attr = self._repr_attr(attr, level)
            represented_attrs.append(represented_attr)
        return ", ".join(represented_attrs)

    def _repr_attr(self, obj, level):
        """Format the attribute of obj

        Args:
            obj (Any): Object to which attr belongs to
            level (str): Level name

        Returns:
            str: Formatted attr name and value
        """
        attr_name, attr_value = obj
        if hasattr(attr_value, "isoformat"):
            return "%s=%r" % (attr_name, attr_value.isoformat())
        return "%s=%r" % (attr_name, attr_value)

    def _iter_attrs(self, obj):
        """Generator for iterating attributes

        Args:
            obj (Any): Object to which attrs belongs to

        Yields:
            tuple: Attribute info
        """
        attr_names = inspect(obj.__class__).columns.keys()
        for attr_name in attr_names:
            yield (attr_name, getattr(obj, attr_name))


class PrettyRepr(Repr):
    """Generates repr for a ORM class with indents"""

    def __init__(self, *args, **kwargs):
        """Prettify the repr"""
        indent = kwargs.pop("indent", None)
        if indent is None:
            self.indent = " " * 4
        else:
            self.indent = indent
        if sys.version_info < (3,):
            Repr.__init__(self, *args, **kwargs)
        else:
            super(PrettyRepr, self).__init__(*args, **kwargs)

    def repr_Base(self, obj, level):
        """Generate repr for obj

        Args:
            obj (Any): Object to get repr for
            level (str): Level name

        Returns:
            str: Repr for the object
        """
        output = io.StringIO()
        output.write("<%s" % self._repr_class(obj, level))
        is_first_attr = True
        for attr in self._iter_attrs(obj):
            if not is_first_attr:
                output.write(",")
            is_first_attr = False
            represented_attr = self._repr_attr(attr, level)
            output.write("\n" + self.indent + represented_attr)
        output.write(">")
        return output.getvalue()


_shared_repr = Repr()
_shared_pretty_repr = PrettyRepr()


class RepresentableBase(object):
    """Base model for Repr"""

    def __repr__(self):
        """Get repr

        Returns:
            str: Representation of class with attributes
        """
        return _shared_repr.repr(self)


class PrettyRepresentableBase(object):
    """Base model for PrettyRepr"""

    def __repr__(self):
        """Get repr

        Returns:
            str: Representation of class with attributes
        """
        return _shared_pretty_repr.repr(self)
    

@lru_cache
def load_constants(config_path=None):
    if not config_path:
        config_path = osp.join(dirpath, "config", "constants.yaml")
    constants = {}

    if osp.isfile(config_path):
        with open(config_path, "r") as file:
            data = yaml.safe_load(file)

        for entry in data["constants"]:
            constants[entry['table_name']] = entry
    return constants


def validate_constants(table_name, column_name, value):
    constants = load_constants()
    if table_name not in constants or column_name not in constants[table_name]:
        return True
    return value in constants[table_name][column_name]


def get_constant_alias(table_name, column_name, value):
    constants = load_constants()
    if table_name not in constants or column_name not in constants[table_name]:
        return value
    return constants[table_name][column_name].get(value, value)