import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import menuReducer from "./menuReducer";
const rootReducer = combineReducers({
  lists: listsReducer,
  menu: menuReducer
});

export default rootReducer;
