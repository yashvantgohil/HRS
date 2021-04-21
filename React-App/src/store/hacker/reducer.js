import { updateObj } from "../../common/utility";
import { SET_ALL_HACKERS, SET_CURRENT_HACKER } from "./actions";

const hackerInitialState = {
  hackers: [],
  selectedHacker: null,
};

const setSelectedHacker = (state, hacker) => {
  return updateObj(state, { selectedHacker: hacker });
};

const hackerReducer = (state = hackerInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_HACKERS:
      return {
        ...state,
        hackers: payload.hackers,
      };
    case SET_CURRENT_HACKER:
      return setSelectedHacker(state, payload.hacker);
    default:
      return state;
  }
};

export default hackerReducer;
