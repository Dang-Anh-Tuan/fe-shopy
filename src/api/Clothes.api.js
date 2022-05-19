import axios from "axios";
import { ENTRYPOINT, REQUEST_OPTION } from "../constants/api";

export const getAllClothes = () =>
  axios.get(`${ENTRYPOINT}clothes`, { headers: REQUEST_OPTION });

export const getDetailClothes = (id) =>
axios.get(`${ENTRYPOINT}clothes/${id}`, { headers: REQUEST_OPTION });