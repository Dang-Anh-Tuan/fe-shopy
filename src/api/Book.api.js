import axios from "axios";
import { ENTRYPOINT, REQUEST_OPTION } from "../constants/api";

export const getAllBook = () =>
  axios.get(`${ENTRYPOINT}book/book`, { headers: REQUEST_OPTION });

export const deleteBook = (id) =>
  axios.delete(`${ENTRYPOINT}book/book/${id}`, { headers: REQUEST_OPTION });
