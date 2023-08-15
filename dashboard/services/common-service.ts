import apiClient from "./base-service";

export async function getDatasets() {
  try {
       const { data } = await apiClient.get(`dataset`);
       return data;
  } catch (error:any) {
    return error?.response;
  }
}

export async function addDataset(data: any) {

    let queryParams = 'name=' + data['name'] + '&source_type=' + data['source_type'] + '&type=' + data['type'] + '&source=' + data['source']
    let formdata = new FormData();
    try {
         const { data } = await apiClient.post(`dataset?`+ queryParams, formdata);
         return data;
    } catch (error:any) {
      return error?.response;
    }
  }