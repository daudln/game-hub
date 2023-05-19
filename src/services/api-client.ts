import axios, { AxiosRequestConfig } from 'axios';

export interface APIResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bbbee065de744b1dbe5a2386ff3f95f8',
  },
});

class APIClient<T> {
  constructor(public endpoint: string) {}
  getAll = async (config: AxiosRequestConfig) => {
    const response = await axiosInstance.get<APIResponse<T>>(
      this.endpoint,
      config
    );
    return response.data;
  };
  get = async (id: number | string) => {
    const response = await axiosInstance.get<T>(`${this.endpoint}/${id}`);
    return response.data;
  };
}

export default APIClient;
