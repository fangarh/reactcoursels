import { loadStarted, loadFinished } from "./actions";

const initialState = {
  loading: false,
};

export const animateReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadStarted.toString():
      return {
        ...state,
        loading: true,
      };
    case loadFinished.toString():
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
