import { combineReducers } from "redux";
import gists from "./gist";

const rootReducer = combineReducers({
  gists,
});

export default rootReducer;
