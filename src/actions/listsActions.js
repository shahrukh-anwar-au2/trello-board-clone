import { types } from "../actions";

export const addList = list => {
  return {
    type: types.ADD_LIST,
    payload: list
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: types.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type
    }
  };
};

export const fetchingLists = () => {
  return {
    type: types.FETCHING_LISTS
  };
};

export const fetchedLists = lists => {
  return {
    type: types.FETCHED_LISTS,
    payload: lists
  };
};
