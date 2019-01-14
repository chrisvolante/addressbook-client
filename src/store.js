// Import 3rd Party Dependencies.
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";

// Import Reducers, Actions, and AuthToken methods.
import authReducer from "./reducers/auth";
import protectedDataReducer from "./reducers/protected-data";
import { loadAuthToken } from "./local-storage";
import { setAuthToken } from "./actions/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  // store.dispatch(refreshAuthToken());
}

export default store;
