import ProfileData from "./../../BuisnessObjects/ProfileData";
import * as actions from "./actions";

const initialState = {
  profile: new ProfileData(),
  error: "",
  isSaveResult: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action) {
    case actions.doLoadProfile.toString():
      return {
        ...state,
        profile: new ProfileData(),
        error: "",
        isSaveResult: false,
      };
    case actions.doSaveProfile.toString():
      return {
        ...state,
        profile: new ProfileData(),
        error: "",
        isSaveResult: false,
      };
    case actions.doFetchProfileResult.toString():
      return {
        ...state,
        profile: action.payload.profile,
        error: action.payload.error,
        isSaveResult: true,
      };
    case actions.doSaveProfileNotified.toString():
      return {
        ...state,
        isSaveResult: false,
      };
    default:
      return state;
  }
};
