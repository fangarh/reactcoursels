import { doLogonAction } from "./actions";

const initialState = {
  loggedOn: false,
  loggedOnErrors: false,
  authToken: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case doLogonAction.toString():
      return {
        ...state,
        loggedOn: false,
        loggedOnErrors: false,
        authToken: "",
      };
    default:
      return state;
  }
};
