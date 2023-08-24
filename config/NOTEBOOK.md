# Bud MLOps Client Package

**Install dependencies**

```
!sudo apt-get update && sudo apt install git -y
```

**Install the package from source**

```
!pip install 'git+https://github.com/BudEcosystem/bud-training.git#egg=bud-mlops-client&subdirectory=bud_mlops_client'
```

**Import the package**

```
from bud_mlops_client import BudMLOpsClient
```

**Connect to the Bud MLOps server**

```
client = BudMLOpsClient(api_url=<API_URL>, api_token=<API_TOKEN>)
```

* API_URL - The base url of the Bud MLOps server
* API_TOKEN - The access token for the API_URL

**Download a dataset from the Bud MLOps server**

```
client.download_dataset(dataset_name=<DATASET_NAME>)
```

* DATASET_NAME - The name of the dataset to be downloaded from the Bud MLOps server.

| Note: If the dataset source is not local upload and instead an external source like S3, Hugging face..., then the dataset won't be auto downloaded to the local file system, instead user needs to write respective function(s) for downloading the dataset from their respective sources. This is subjective to change in future versions

**Upload a dataset to the Bud MLOps server**

```
client.upload_dataset(dataset_name=<DATASET_NAME>, metadata_filepath=<METADATA_FILEPATH>, image_dirpath=<IMAGE_DIRPATH>)
```

* DATASET_NAME - The name of the dataset to be uploaded to the Bud MLOps server.
* METADATA_FILEPATH - The path (in the local filesystem of the notebook server) to the metadata.jsonl or metadata.json file.
* IMAGE_DIRPATH - The path (in the local filesystem of the notebook server) to the image directory. This is optional and only required if the dataset type is 'Text & Image'

| Note: Upload dataset will create a new dataset with the given name and it won't update any existing dataset. So, even if an existing dataset from the Bud MLOps server is downloaded, after pre processing or any other modifications, the final dataset should be uploaded as a new dataset.