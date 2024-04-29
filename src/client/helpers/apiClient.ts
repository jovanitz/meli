import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

type ApiConfig<U> = AxiosRequestConfig & {
  data?: U;
};

const BASE_URL = "/api";

const axiosClient = () => {
  const defaultOptions = {
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10000,
  };
  return axios.create(defaultOptions);
};

const apiClient = async <T, U = Record<string, unknown>>(
  config: ApiConfig<U>
) => {
  try {
    const response: AxiosResponse<T> = await axiosClient()(config);
    return response.data;
  } catch (err) {
    const error = err as AxiosError;

    return Promise.reject({ message: error });
  }
};

export default apiClient;
