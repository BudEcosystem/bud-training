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
  formdata.append('name', data['name'])
  formdata.append('source_type', data['source_type'])
  formdata.append('type', data['type'])
  formdata.append('source', data['source'])

  if(data['meta_file']) formdata.append('metadata_file', data['meta_file'])
  if( data['archive_file']) formdata.append('archive_file', data['archive_file'])
  
  let params = {}
  if(data['meta_file'] || data['archive_file'] ){
    params = formdata
  }
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

export async function getModels() {
  try {
    const { data } = await apiClient.get(`models`);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function addModel(params: any) {
  
  let queryParams = 'name=' + params['name'] + '&source_type=' + params['source_type'] + '&type=' + params['type'] + '&source=' + params['source']
  
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

export async function getPipeline() {
  try {
    const { data } = await apiClient.get(`pipeline`);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function deletePipeline(pipeline_id: any) {

  try {
    const { data } = await apiClient.delete(`pipeline/` + pipeline_id);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function addPipeline(params: any) {
  console.log(params)
  // let queryParams = 'name=' + data['name'] + '&source_type=' + data['source_type'] + '&type=' + data['type'] + '&source=' + data['source']
  
  try {
    const { data } = await apiClient.post(`pipeline`, params);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function updatePipeline(params: any) {

  try {
    const { data } = await apiClient.put(`pipeline/` + params['id'], params);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function getPipelineDetail(pipeline_id: string) {
  try {
    const { data } = await apiClient.get(`pipeline/` + pipeline_id);
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

export async function startNotebook(pipeline_id: any, node_id: any) {
  let body = {
    pipeline_id: pipeline_id,
    node_ref_id: node_id
  }
  try {
    const { data } = await apiClient.post(`notebook/?pipeline_id=`+pipeline_id+'&node_ref_id='+node_id);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}

export async function getExperiments(id: string) {
  // let id = ''
  try {
    const { data } = await apiClient.get(`run?pipeline_id=` + id);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}
export async function startRun(pipeline_id: any) {

  try {
    const { data } = await apiClient.post(`run/start/` + pipeline_id);
    return data;
  } catch (error: any) {
    return error?.response;
  }
}
