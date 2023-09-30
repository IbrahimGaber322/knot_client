import {
  FETCH_ALL_LINKSECTIONS,
  CREATE_LINKSECTION,
  UPDATE_LINKSECTION,
  DELETE_LINKSECTION,
  START_LOADING,
  FETCH_LINKSECTION,
  FETCH_LINKSECTIONS_BY_USER,
} from "../constants/actionTypes";

import * as api from "../api";

import Linksection from "../constants/linksection";

export const getLinksections =
  (page: number, keyword: string) => async (dispatch: Function) => {
    dispatch({ type: START_LOADING });
    try {
      const { data } = await api.fetchLinksections(page, keyword);
      dispatch({ type: FETCH_ALL_LINKSECTIONS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const getLinkSectionsByUser: Function =
  (page: number, keyword: string) => async (dispatch: Function) => {
    dispatch({ type: START_LOADING });
    try {
      const { data } = await api.fetchLinksectionsByUser(page, keyword);
      console.log(`linksection action : ${data}`)
      dispatch({ type: FETCH_LINKSECTIONS_BY_USER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const getlinksection = (id: string) => async (dispatch: Function) => {
  dispatch({ type: START_LOADING });
  try {
    const { data } = await api.fetchLinksection(id);
    dispatch({ type: FETCH_LINKSECTION, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createLinksection:Function =
  (linksection: Linksection) => async (dispatch: Function) => {
    try {
      const { data } = await api.createLinksection(linksection);

      dispatch({ type: CREATE_LINKSECTION, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const updateLinksection =
  (id: string, linksection: Linksection) => async (dispatch: Function) => {
    try {
      const { data } = await api.updateLinksection(id, linksection);

      dispatch({ type: UPDATE_LINKSECTION, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteLinksection = (id: string) => async (dispatch: Function) => {
  try {
    await api.deleteLinksection(id);

    dispatch({ type: DELETE_LINKSECTION, payload: id });
  } catch (error) {
    console.log(error);
  }
};
