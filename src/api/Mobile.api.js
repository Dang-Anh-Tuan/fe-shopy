import axios from "axios";
import { ENTRYPOINT, REQUEST_OPTION } from "../constants/api";

export const getAllMobile = () =>
  axios.get(`${ENTRYPOINT}mobile/mobile`, { headers: REQUEST_OPTION });

export const deleteMobile = (id) =>
  axios.delete(`${ENTRYPOINT}mobile/mobile/${id}/`, { headers: REQUEST_OPTION });

export const createMobile = (data) =>
  axios.post(`${ENTRYPOINT}mobile/mobile/`, data, { headers: REQUEST_OPTION });

export const getDetailMobile = (id) =>
  axios.get(`${ENTRYPOINT}mobile/mobile/${id}/`, { headers: REQUEST_OPTION });

export const updateMobile = (id, data) =>
  axios.put(`${ENTRYPOINT}mobile/mobile/${id}/`, data, {
    headers: REQUEST_OPTION,
  });

