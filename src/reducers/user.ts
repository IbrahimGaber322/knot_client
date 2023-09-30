import { SIGNOUT, GET_USER } from "../constants/actionTypes";
import User from "../constants/user";

const userReducer = (user:User|null = null, action: any) => {
  switch (action.type) {
    case GET_USER:
      return (user = action?.payload);
    case SIGNOUT:
      return (user = null);
    default:
      return user;
  }
};

export default userReducer;
