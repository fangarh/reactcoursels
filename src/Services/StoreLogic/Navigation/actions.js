import { createAction } from "redux-actions";

export const doLoadRoutesList = createAction(
  "lt/servise/navigation/Load_Routes_List"
);
export const doLoadRoutesListSuccess = createAction(
  "lt/servise/navigation/Load_Routes_List_Success"
);
export const doLoadRoute = createAction("lt/servise/navigation/Load_Rout");
export const doLoadRouteSuccess = createAction(
  "lt/servise/navigation/Load_Rout_Success"
);
export const doLoadRouteFail = createAction(
  "lt/servise/navigation/Load_Rout_Fail"
);
