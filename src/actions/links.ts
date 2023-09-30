import {
  FETCH_ALL_LINKS,
  CREATE_LINK,
  UPDATE_LINK,
  DELETE_LINK,
  START_LOADING,
  FETCH_LINKSECTION,
  FETCH_LINKS_BY_LINKSECTION,
} from "../constants/actionTypes";

import * as api from "../api";

import Link from "../constants/link";

export const getLinks =
  (page: number, keyword: string) => async (dispatch: Function) => {
    dispatch({ type: START_LOADING });
    try {
      const { data } = await api.fetchLinks(page, keyword);
      dispatch({ type: FETCH_ALL_LINKS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const getLinksByLinksection: Function =
  (id: string) => async (dispatch: Function) => {
    dispatch({ type: START_LOADING });
    try {
      const { data } = await api.fetchLinksByLinksection(id);
      dispatch({ type: FETCH_LINKS_BY_LINKSECTION, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const getlink = (id: string) => async (dispatch: Function) => {
  dispatch({ type: START_LOADING });
  try {
    const { data } = await api.fetchLink(id);
    dispatch({ type: FETCH_LINKSECTION, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createLink: Function =
  (link: Link) => async (dispatch: Function) => {
    console.log(link);
    try {
      const { data } = await api.createLink(link);

      dispatch({ type: CREATE_LINK, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const updateLinksection =
  (id: string, link: Link) => async (dispatch: Function) => {
    try {
      const { data } = await api.updateLink(id, link);

      dispatch({ type: UPDATE_LINK, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteLink = (id: string) => async (dispatch: Function) => {
  try {
    await api.deleteLink(id);

    dispatch({ type: DELETE_LINK, payload: id });
  } catch (error) {
    console.log(error);
  }
};
