import { updateObj } from "../../common/utility";
import { USER_LOGOUT, SET_USER, SET_TOKEN } from "./actions";

const authInitialState = {
  currentUser: null,
  isAuthenticated: false,
  token: null,
  isAdmin: false,
};

const authReducer = (state = authInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      debugger;
      return updateObj(state, {
        currentUser: payload.user,
        isAuthenticated: true,
        isAdmin: payload.user.isAdmin,
      });
    case SET_TOKEN:
      return updateObj(state, { token: payload.token });
    case USER_LOGOUT:
      return updateObj(state, {
        token: null,
        currentUser: null,
        isAuthenticated: false,
      });
    default:
      return state;
  }
};

export default authReducer;
