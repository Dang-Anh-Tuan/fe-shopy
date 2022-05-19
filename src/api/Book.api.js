import axios from "axios";
import { ENTRYPOINT, REQUEST_OPTION } from "../constants/api";

export const getAllBook = () =>
  axios.get(`${ENTRYPOINT}book/books`, { headers: REQUEST_OPTION });

export const getDetailBook = (id) =>
  axios.get(`${ENTRYPOINT}book/books/${id}`, { headers: REQUEST_OPTION });

export const deleteBook = (id) =>
  axios.delete(`${ENTRYPOINT}book/books/${id}`, { headers: REQUEST_OPTION });

export const createBook = (data) =>
  axios.post(`${ENTRYPOINT}book/books/`, data, { headers: REQUEST_OPTION });

export const updateBook = (id, data) =>
  axios.put(`${ENTRYPOINT}book/books/${id}/`, data, {
    headers: REQUEST_OPTION,
  });

export const getAllAuthor = () =>
  axios.get(`${ENTRYPOINT}book/author`, { headers: REQUEST_OPTION });

export const getAllPublisher = () =>
  axios.get(`${ENTRYPOINT}book/publisher`, { headers: REQUEST_OPTION });

export const getAllCategory = () =>
  axios.get(`${ENTRYPOINT}book/category`, { headers: REQUEST_OPTION });
