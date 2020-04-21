import {
  doLogonAction,
  doLogonSuccess,
  doLogonFail,
  doRegister,
  doRegisterSuccess,
  doRegisterFail,
  doLogoff,
} from "./actions";

const initialState = {
  loggedOn: false,
  loggedOnErrors: false,
  authToken: "",
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case doLogoff.toString():
      return {
        ...state,
        loggedOn: false,
        loggedOnErrors: false,
        authToken: "",
        error: "",
      };
    case doLogonAction.toString():
    case doRegister.toString():
      return {
        ...state,
        loggedOn: false,
        loggedOnErrors: false,
        authToken: "",
        error: "",
      };
    case doLogonSuccess.toString():
    case doRegisterSuccess.toString():
      return {
        ...state,
        loggedOn: true,
        loggedOnErrors: false,
        authToken: action.payload,
        error: "",
      };
    case doLogonFail.toString():
    case doRegisterFail.toString():
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
