import { types } from "../actions";

export const addCard = (listID, card) => {
  return {
    type: types.ADD_CARD,
    payload: { card, listID }
  };
};
