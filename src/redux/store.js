import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import punchlistReducer from "./punchlistDuck";
import { getPunchlistAction } from "./punchlistDuck";

let rootReducer = combineReducers({
  punchlist: punchlistReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  getPunchlistAction()(store.dispatch, store.getState);
  return store;
}
