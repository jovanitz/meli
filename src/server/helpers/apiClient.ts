import axios, { AxiosRequestConfig } from "axios";
const API_URL = "https://api.mercadolibre.com/";

const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiClient = async (config: AxiosRequestConfig) => {
  try {
    const response = await apiInstance(config);
    return response.data;
  } catch (error) {
    return Promise.reject({ message: error });
  }
};

export default apiClient;
