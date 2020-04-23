import { loadStarted, loadFinished } from "./actions";

const initialState = {
  loading: false,
  error: "",
};

export const animateReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadStarted.toString():
      return {
        ...state,
        error: "",
        loading: true,
      };
    case loadFinished.toString():
      return {
        ...state,
        error: action.payload ? action.payload : "",
        loading: false,
      };

    default:
      return state;
  }
};
