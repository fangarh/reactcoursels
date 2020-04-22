import {
  doLogonAction,
  doLogonSuccess,
  doLogonFail,
  doRegister,
  doRegisterSuccess,
  doRegisterFail,
  doFlushAutoLogon,
  doLogoff,
} from "./actions";

const auth = localStorage.getItem("loggedOn");
const authToken = localStorage.getItem("authToken");

const initialState = {
  loggedOn: auth,
  autoLogOn: auth,
  loggedOnErrors: false,
  authToken: authToken,
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case doLogoff.toString():
      localStorage.setItem("loggedOn", false);
      localStorage.setItem("authToken", "");
      return {
        ...state,
        loggedOn: false,
        autoLogOn: false,
        loggedOnErrors: false,
        authToken: "",
        error: "",
      };
    case doLogonAction.toString():
    case doRegister.toString():
      return {
        ...state,
        loggedOn: false,
        autoLogOn: false,
        loggedOnErrors: false,
        authToken: "",
        error: "",
      };
    case doLogonSuccess.toString():
    case doRegisterSuccess.toString():
      localStorage.setItem("loggedOn", true);
      localStorage.setItem("authToken", action.payload);
      return {
        ...state,
        loggedOn: true,
        autoLogOn: false,
        loggedOnErrors: false,
        authToken: action.payload,
        error: "",
      };
    case doLogonFail.toString():
    case doRegisterFail.toString():
      return {
        ...state,
        loggedOn: false,
        autoLogOn: false,
        loggedOnErrors: true,
        authToken: "",
        error: action.payload,
      };
    case doFlushAutoLogon.toString():
      return {
        ...state,
        autoLogOn: false,
      };
    default:
      return state;
  }
};
