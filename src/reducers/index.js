import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import userReducer from "./userReducer";
import contactsReducer from "./contactsReducer";

const rootReducer = combineReducers({
  userReducer,
  contactsReducer,
  form: formReducer
});

export default rootReducer;
