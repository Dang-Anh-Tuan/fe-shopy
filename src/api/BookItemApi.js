import axiosClient from "./axiosClient";

const BookItemApi = {
  getAll: (params) => {
    const url = "/bookitem";
    return axiosClient.get(url, params);
  },

  get: (id) => {
    const url = `/bookitem/${id}`;
    return axiosClient.get(url);
  },
};

export default BookItemApi;
