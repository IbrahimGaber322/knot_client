import {
  FETCH_ALL_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  START_LOADING,
  FETCH_PRODUCT,
  FETCH_PRODUCTS_BY_USER,
} from "../constants/actionTypes";

import * as api from "../api";
import Product from "../constants/product";

export const getProducts =
  (page: number, keyword: string) => async (dispatch: Function) => {
    dispatch({ type: START_LOADING });
    try {
      const { data } = await api.fetchProducts(page, keyword);
      dispatch({ type: FETCH_ALL_PRODUCTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const getProductsByUser: Function = () => async (dispatch: Function) => {
  dispatch({ type: START_LOADING });
  try {
    const { data } = await api.fetchProductsByUser();
    dispatch({ type: FETCH_PRODUCTS_BY_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = (id: string) => async (dispatch: Function) => {
  dispatch({ type: START_LOADING });
  try {
    const { data } = await api.fetchProduct(id);
    dispatch({ type: FETCH_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct: Function =
  (product: Product) => async (dispatch: Function) => {
    try {
      const { data } = await api.createProduct(product);

      dispatch({ type: CREATE_PRODUCT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const updateProduct =
  (id: string, product: Product) => async (dispatch: Function) => {
    try {
      const { data } = await api.updateProduct(id, product);

      dispatch({ type: UPDATE_PRODUCT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteProduct = (id: string) => async (dispatch: Function) => {
  try {
    await api.deleteProduct(id);

    dispatch({ type: DELETE_PRODUCT, payload: id });
  } catch (error) {
    console.log(error);
  }
};
