import * as actions from "./actions";

const initialState = {
  avaliablePoints: [],
  currentRout: [],
  routExists: false,
  error: "",
};

export const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.doLoadRoutesList.toString():
      return {
        ...state,
        avaliablePoints: [],
        currentRout: [],
        routExists: false,
        error: "",
      };
    case actions.doLoadRoutesListSuccess.toString():
      return {
        ...state,
        avaliablePoints: action.payload,
        currentRout: [],
        routExists: false,
        error: "",
      };
    case actions.doLoadRoute.toString():
      return {
        ...state,
      };
    case actions.doLoadRouteSuccess.toString():
      return {
        ...state,
        currentRout: action.payload,
        routExists: true,
        error: "",
      };
    case actions.doLoadRouteFail.toString():
      return {
        ...state,
        currentRout: [],
        error: action.payload,
        routExists: false,
      };
    default:
      return state;
  }
};
