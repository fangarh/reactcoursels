import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./Authorization/authReducer";
import { profileReducer } from "./Profile/profileReducer";
import { animateReducer } from "./Animation/animReducer";
import { routeReducer } from "./Navigation";

import { sagaListner } from "../ServerLogic/sagas";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  anim: animateReducer,
  rout: routeReducer,
});

const saga = createSagaMiddleware();

export const appStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(sagaListner);
