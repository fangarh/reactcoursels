import { combineReducers } from "redux";
import { authReducer } from "./Authorization/authReducer";
import { profileReducer } from "./Profile/profileReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});
