import axios from "axios";
import { ENTRYPOINT, REQUEST_OPTION } from "../constants/api";

export const getAllLaptop = () =>
  axios.get(`${ENTRYPOINT}laptop/laptop`, { headers: REQUEST_OPTION });

export const deleteLaptop = (id) =>
  axios.delete(`${ENTRYPOINT}laptop/laptop/${id}/`, { headers: REQUEST_OPTION });

export const createLaptop = (data) =>
  axios.post(`${ENTRYPOINT}laptop/laptop/`, data, { headers: REQUEST_OPTION });

export const getDetailLaptop = (id) =>
  axios.get(`${ENTRYPOINT}laptop/laptop/${id}/`, { headers: REQUEST_OPTION });

export const updateLaptop = (id, data) =>
  axios.put(`${ENTRYPOINT}laptop/laptop/${id}/`, data, {
    headers: REQUEST_OPTION,
  });

export const getAllManuf = () =>
  axios.get(`${ENTRYPOINT}laptop/manufacture`, { headers: REQUEST_OPTION });
