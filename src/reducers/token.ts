import { SIGNIN, SIGNUP, SIGNOUT } from "../constants/actionTypes";

const tokenReducer = (
  token:string = JSON.parse(localStorage.getItem("token") || "null"),
  action: any
) => {
  switch (action.type) {
    case SIGNUP:
    case SIGNIN:
      localStorage.setItem("token", JSON.stringify(action?.payload));
      return (token = JSON.parse(localStorage.getItem("token") || "null"));

    case SIGNOUT:
      localStorage.removeItem("token");
      return (token = JSON.parse(localStorage.getItem("user") || "null"));
    default:
      return token;
  }
};

export default tokenReducer;
