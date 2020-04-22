import { combineReducers } from "redux";

import { authReducer } from "./Reducer/Authorization/authReducer";
import { profileReducer } from "./Reducer/Profile/profileReducer";
import { animateReducer } from "./Reducer/Animation/animReducer";
import { routeReducer } from "./Reducer/Navigation";

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  anim: animateReducer,
  rout: routeReducer,
});
