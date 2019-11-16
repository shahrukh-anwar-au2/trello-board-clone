import { types } from "../actions";

const initialState = {
  menuDisplay: false
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MENU:
      return {
        ...state,
        menuDisplay: true
      };
    case types.HIDE_MENU:
      return {
        ...state,
        menuDisplay: false
      };
    default:
      return state;
  }
};

export default menuReducer;
