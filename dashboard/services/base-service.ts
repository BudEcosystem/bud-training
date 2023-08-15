import axios from "axios";
import { AppConfig } from "../utils/app-config";


const apiClient = (function () {
  const URL = AppConfig.apiBaseUrl;
  const unauthorizedCode = [401];

  let instance = axios.create({
    baseURL: `${URL}`,
    headers: {
      "Content-Type": "application/json",
    },
    // timeout: 5000,
  });

  instance.interceptors.request.use(async (config) => {
    config.headers['x-token'] = 'Nc5C00ZCyObhJuE5XDapaZH1';

    return config;
  });

  return instance;
})();

export default apiClient;
