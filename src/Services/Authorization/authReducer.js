import { doLogonAction, doLogonSuccess, doLogonFail } from "./actions";

const initialState = {
  loggedOn: false,
  loggedOnErrors: false,
  authToken: "",
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case doLogonAction.toString():
      return {
        ...state,
        loggedOn: false,
        loggedOnErrors: false,
        authToken: "",
        error: "",
      };
    case doLogonSuccess.toString():
      return {
        ...state,
        loggedOn: true,
        loggedOnErrors: false,
        authToken: action.payload,
        error: "",
      };
    case doLogonFail.toString():
      return {
        ...state,
        loggedOn: false,
        loggedOnErrors: true,
        authToken: "",
        error: action.payload,
      };
    default:
      return state;
  }
};
