import apiClient from "./base-service";

export async function getDatasets() {
  try {
    const { data } = await apiClient.get(`dataset`);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function addDataset(data: any) {
  console.log(data['meta_file'])
  let queryParams = 'name=' + data['name'] + '&source_type=' + data['source_type'] + '&type=' + data['type'] + '&source=' + data['source']
  let formdata = new FormData();
  formdata.append('metadata_file', data['meta_file'])
  if( data['archive_file']) formdata.append('archive_file', data['archive_file'])
  try {
    const { data } = await apiClient.post(`dataset?` + queryParams, formdata);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function updateDataset(params: any) {

  try {
    const { data } = await apiClient.put(`dataset/` + params['id'], params);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function deleteDataset(dataset_id: any) {

  try {
    const { data } = await apiClient.delete(`dataset/` + dataset_id);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}