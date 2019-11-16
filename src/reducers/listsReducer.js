import { types } from "../actions";

const initialState = {
  lists: [],
  fetching: false,
  fetched: false
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_LISTS:
      return {
        ...state,
        fetching: true
      };
    case types.FETCHED_LISTS:
      return {
        ...state,
        fetched: true,
        lists: action.payload,
        fetching: false
      };
    case types.ADD_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload]
      };
    case types.ADD_CARD: {
      const newLists = state.lists.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, action.payload.card]
          };
        } else {
          return list;
        }
      });

      return {
        ...state,
        lists: newLists
      };
    }
    case types.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type
      } = action.payload;
      const newState = [...state.lists];

      // dragging lists around
      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return {
          ...state,
          lists: newState
        };
      }

      // drag in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.lists.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // drag in different list

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.lists.find(
          list => list.id === droppableIdStart
        );
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = state.lists.find(list => list.id === droppableIdEnd);

        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return {
        ...state,
        lists: newState
      };

    default:
      return state;
  }
};

export default listsReducer;
