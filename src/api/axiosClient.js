import axios from "axios";
import { ENTRYPOINT, REQUEST_OPTION } from "../constants/api";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: ENTRYPOINT,
  headers: REQUEST_OPTION,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
