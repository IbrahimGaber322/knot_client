import axios from "axios";
import store from "../store/store";
import User from "../constants/user";
import Product from "../constants/product";
import Linksection from "../constants/linksection";
import Link from "../constants/link";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const API = axios.create({ baseURL: SERVER_URL });
const GetToken = () => {
  const token = store.getState().token?.token;

  return token;
};
API.interceptors.request.use((req) => {
  const token = GetToken();
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

/* Token */

export const signup = (newUser: User) => API.post(`/auth/signup`, newUser);
export const login = (user: User) => API.post(`/auth/login`, user);

/* User */

export const getUser = () => API.get("/auth/user");
export const updateUser = (user: User) => API.patch("/auth/user", user);

/* Products */

export const fetchProducts = (page: number, keyword: string) =>
  API.get(`/products/?keyword=${keyword}&page=${page}`);
export const fetchProduct = (id: string) => API.get(`/products/product/${id}`);
export const fetchProductsByUser = () =>
  API.get(`/products/user`);
export const createProduct = (product: Product) =>
  API.post(`/products`, product);
export const deleteProduct = (id: string) => API.delete(`/products/${id}`);
export const updateProduct = (id: string, product: Product) =>
  API.put(`/products/${id}`, product);

/* Linksections */

export const fetchLinksections = (page: number, keyword: string) =>
  API.get(`/linksections/?keyword=${keyword}&page=${page}`);
export const fetchLinksection = (id: string) =>
  API.get(`/linksections/linksection/${id}`);
export const fetchLinksectionsByUser = (page: number, keyword: string) =>
  API.get(`/linksections/user/?keyword=${keyword}&page=${page}`);
export const createLinksection = (linksection: Linksection) =>
  API.post(`/linksections`, linksection);
export const deleteLinksection = (id: string) =>
  API.delete(`/linksections/${id}`);
export const updateLinksection = (id: string, linksection: Linksection) =>
  API.put(`/linksections/${id}`, linksection);

/* Links */

export const fetchLinks = (page: number, keyword: string) =>
  API.get(`/links/?keyword=${keyword}&page=${page}`);
export const fetchLink = (id: string) => API.get(`/links/link/${id}`);
export const fetchLinksByLinksection = (id: string) =>
  API.get(`/links/section/${id}`);
export const createLink = (link: Link) => API.post(`/links`, link);
export const deleteLink = (id: string) => API.delete(`/links/${id}`);
export const updateLink = (id: string, link: Link) =>
  API.put(`/links/${id}`, link);
