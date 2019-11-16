import { types } from "../actions";

export const showMenu = () => {
  return {
    type: types.SHOW_MENU
  };
};

export const hideMenu = () => {
  return {
    type: types.HIDE_MENU
  };
};
