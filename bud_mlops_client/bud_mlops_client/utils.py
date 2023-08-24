from os import path as osp
from os import walk
from urllib.parse import urljoin, quote_plus
import zipfile
import io


def multi_urljoin(*parts):
    return urljoin(
        parts[0], "/".join(quote_plus(part.strip("/"), safe="/") for part in parts[1:])
    )


def create_zipfile_buffer_from_dir(dirpath):
    zip_bytes_io = io.BytesIO()
    base_name = osp.dirname(dirpath.rstrip("/"))
    with zipfile.ZipFile(zip_bytes_io, "w", zipfile.ZIP_DEFLATED) as zipped:
        for dirname, subdirs, files in walk(dirpath):
            rel_name = dirname.replace(base_name, "")
            zipped.write(dirname, rel_name)
            for filename in files:
                zipped.write(osp.join(dirname, filename), osp.join(rel_name, filename))
    return zip_bytes_io
