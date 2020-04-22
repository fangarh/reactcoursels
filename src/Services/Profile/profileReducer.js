import ProfileData from "./../../BuisnessObjects/ProfileData";
import * as actions from "./actions";

const initialState = {
  profile: new ProfileData(),
  error: "",
  isSaveResult: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
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
        profile: action.payload,
        error: "",
        isSaveResult: false,
      };
    case actions.doLoadProfileResult.toString():
      const { success, error } = action.payload;
      const { cardName, cardNumber, cvc, expiryDate } = action.payload;

      if (success)
        return {
          ...state,
          profile: new ProfileData(),
          error: error,
          isSaveResult: false,
        };
      else
        return {
          ...state,
          profile: new ProfileData(cardNumber, expiryDate, cvc, cardName),
          error: "",
          isSaveResult: false,
        };
    case actions.doSaveProfileNotified.toString():
      return {
        ...state,
        error: action.payload.error,
        isSaveResult: action.payload.success,
      };
    case actions.doFlushNotifie.toString():
      return {
        ...state,
        error: "",
        isSaveResult: false,
      };
    default:
      return state;
  }
};
