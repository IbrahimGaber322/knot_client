import {
  SIGNUP,
  SIGNIN,
  SIGNOUT,
  GET_USER,
 
} from "../constants/actionTypes";
import User from "../constants/user";
import * as api from "../api";

export const signOut:Function = () => async (dispatch: Function) => {
  try {
    dispatch({ type: SIGNOUT });
  } catch (error) {
    console.log(error);
  }
};

export const signUp:Function = (user:User) => async (dispatch: Function) => {
  try {
    const { data } = await api.signup(user);

    dispatch({ type: SIGNUP, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const login:Function = (user:User) => async (dispatch: Function) => {

  try {
    const { data } = await api.login(user);

    dispatch({ type: SIGNIN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUser:Function = () => async (dispatch: Function) => {

  try {
    const { data } = await api.getUser();

    dispatch({ type: GET_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser:Function = (user:User) => async (dispatch: Function) => {

  try {
    const { data } = await api.updateUser(user);

    dispatch({ type: GET_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
