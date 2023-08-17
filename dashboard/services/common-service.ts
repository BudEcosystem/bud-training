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
  
  let queryParams = 'name=' + data['name'] + '&source_type=' + data['source_type'] + '&type=' + data['type'] + '&source=' + data['source']
  
  let formdata = new FormData();
  if(data['meta_file']) formdata.append('metadata_file', data['meta_file'])
  if( data['archive_file']) formdata.append('archive_file', data['archive_file'])
  
  let params = {}
  if(data['meta_file'] || data['archive_file'] ){
    params = formdata
  }
  try {
    
    const { data } = await apiClient.post(`dataset?` + queryParams, params);
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

export async function getModels() {
  try {
    const { data } = await apiClient.get(`models`);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function addModel(params: any) {
  
  // let queryParams = 'name=' + data['name'] + '&source_type=' + data['source_type'] + '&type=' + data['type'] + '&source=' + data['source']
  
  try {
    const { data } = await apiClient.post(`models?`, params);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function updateModel(params: any) {

  try {
    const { data } = await apiClient.put(`models/` + params['id'], params);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function deleteModel(model_id: any) {

  try {
    const { data } = await apiClient.delete(`models/` + model_id);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function getPipelineConfig() {
  try {
    const { data } = await apiClient.get(`pipeline/config`);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function getInference() {
  try {
    const { data } = await apiClient.get(`inference`);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function addInference(model_id: string) {
    
  try {
    const { data } = await apiClient.post(`inference/create`, {model_id: model_id});
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function deleteInference(serving_id: any) {

  try {
    const { data } = await apiClient.delete(`inference/delete/` + serving_id);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function stopInference(serving_id: any) {

  try {
    const { data } = await apiClient.post(`inference/stop/` + serving_id);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function startInference(serving_id: any) {

  try {
    const { data } = await apiClient.post(`inference/start/` + serving_id);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}