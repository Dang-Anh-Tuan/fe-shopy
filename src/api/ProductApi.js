import axiosClient from "./axiosClient";

const ProductApi = {
  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};
