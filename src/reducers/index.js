import { combineReducers } from "redux";
import emailsReducer from "./emailsReducer";

const reducers = combineReducers({
  emails: emailsReducer,
});
export default reducers;
