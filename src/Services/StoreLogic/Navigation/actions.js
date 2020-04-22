import { createAction } from "redux-actions";

export const doLoadRoutesList = createAction(
  "lt/servise/navigation/loadrouteslist"
);
export const doLoadRoutesListSuccess = createAction(
  "lt/servise/navigation/loadrouteslistsuccess"
);
export const doLoadRoute = createAction("lt/servise/navigation/loadrout");
export const doLoadRouteSuccess = createAction(
  "lt/servise/navigation/loadroutsuccess"
);
export const doLoadRouteFail = createAction(
  "lt/servise/navigation/loadroutfail"
);
