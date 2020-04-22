import { combineReducers } from "redux";

import { authReducer } from "./StoreLogic/Authorization/authReducer";
import { profileReducer } from "./StoreLogic/Profile/profileReducer";
import { animateReducer } from "./StoreLogic/Animation/animReducer";
import { routeReducer } from "./StoreLogic/Navigation";

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  anim: animateReducer,
  rout: routeReducer,
});
