import { combineReducers } from "redux";

import { authReducer } from "./Authorization/authReducer";
import { profileReducer } from "./Profile/profileReducer";
import { animateReducer } from "./Animation/animReducer";
import { routeReducer } from "./Navigation";

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  anim: animateReducer,
  rout: routeReducer,
});