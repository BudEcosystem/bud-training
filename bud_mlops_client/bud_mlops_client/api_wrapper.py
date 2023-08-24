import requests
import zipfile
import io
from os import path as osp
from pathlib import Path
from tqdm import tqdm

from . import utils


class BudMLOpsClient:
    def __init__(self, api_url: str, api_token: str) -> None:
        self.api_url = api_url
        self.api_token = api_token
        self.session = None
        self.connect()

    def connect(self):
        sess = requests.Session()
        sess.headers.update({"x-token": self.api_token})
        resp = sess.get(utils.multi_urljoin(self.api_url, "/ping"))
        if resp.status_code != 200:
            raise ConnectionError(
                f"Server returned an invalid response [{resp.status_code}]: {resp.content.decode()}"
            )
        self.session = sess

    def api_request(self, method, path, raise_for_status=True, **kwargs):
        method = getattr(self.session, method)
        url = utils.multi_urljoin(self.api_url, path)
        resp = method(url, **kwargs)

        if raise_for_status:
            resp.raise_for_status()

        return resp

    def download_dataset(self, dataset_name: str, save_dir: str = None):
        resp = self.api_request(
            "get", "/dataset/", params={"dataset_name": dataset_name}
        )
        if not resp.json()["status"]:
            raise ValueError("Dataset fetching failed!!!")

        dataset = resp.json()["data"][0]
        endpoint = f"/dataset/download/{dataset['dataset_id']}"

        chunk_size = 100000000  # size of 1 chunk to download 100000000 = 100 MB
        save_dir = save_dir or "."

        buffer = io.BytesIO()

        with self.api_request(
            "get", endpoint, raise_for_status=False, stream=True, allow_redirects=True
        ) as resp:
            if resp.status_code == 204:
                # raise NotImplementedError("Download from external source")
                print(
                    "[WARNING] The specified dataset is from an external source, skipping download..."
                )
                return dataset
            resp.raise_for_status()

            total_size = resp.headers.get("Content-Length")  # total size in bytes
            if total_size is not None:
                total_size = int(total_size)

            for chunk in tqdm(
                resp.iter_content(chunk_size=chunk_size),
                total=total_size // chunk_size,
            ):  # Download a 100 mb chunk
                buffer.write(chunk)

        archive_file = zipfile.ZipFile(buffer)
        for name in archive_file.namelist():
            if name.endswith("/"):
                Path(osp.join(save_dir, name)).mkdir(exist_ok=True, parents=True)
            else:
                with archive_file.open(name) as file:
                    content = file.read()
                with open(osp.join(save_dir, name), "wb") as file:
                    file.write(content)

        print("[INFO] Download complete")
        dataset["source"] = osp.join(save_dir, dataset["dataset_id"])
        return dataset

    def upload_dataset(
        self, dataset_name: str, metadata_filepath: str, image_dirpath: str = None
    ):
        source_type = 1
        _type = 0
        archive_file = None

        image_dirpath = image_dirpath or None

        if not osp.isfile(metadata_filepath):
            raise FileNotFoundError(
                f"Metedata file '{metadata_filepath}' doesn't exist."
            )
        if image_dirpath:
            if osp.isfile(image_dirpath) and image_dirpath.endswith(".zip"):
                archive_file = image_dirpath
            elif not osp.isdir(image_dirpath):
                raise NotADirectoryError(
                    f"Image directory '{image_dirpath}' doesn't exist"
                )

        if image_dirpath is not None and archive_file is None:
            archive_file = utils.create_zipfile_buffer_from_dir(
                image_dirpath
            ).getbuffer()
        elif archive_file is not None:
            archive_file = open(archive_file, "rb")

        if archive_file is not None:
            _type = 1

        resp = self.api_request(
            "post",
            "/dataset/",
            files={
                "metadata_file": (
                    "metadata" + Path(metadata_filepath).suffix,
                    open(metadata_filepath, "rb"),
                ),
                "archive_file": ("images.zip", archive_file),
                "name": (None, dataset_name),
                "source": (None, None),
                "source_type": (None, source_type),
                "type": (None, _type),
            },
        )
        print("[INFO] Dataset succefully created")
        return resp.json()
