import axios from "axios";
import { ENTRYPOINT, REQUEST_OPTION } from "../constants/api";

export const getAllBook = () =>
  axios.get(`${ENTRYPOINT}book/books`, { headers: REQUEST_OPTION });

export const deleteBook = (id) =>
  axios.delete(`${ENTRYPOINT}book/books/${id}`, { headers: REQUEST_OPTION });

export const createBook = (data) =>
  axios.post(`${ENTRYPOINT}book/books/`, data, { headers: REQUEST_OPTION });
