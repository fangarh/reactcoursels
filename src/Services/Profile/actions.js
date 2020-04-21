import { createAction } from "redux-actions";

export const doSaveProfile = createAction("lt/servise/profile/save");

export const doSaveProfileNotified = createAction(
  "lt/servise/profile/savenotified"
);

export const doLoadProfile = createAction("lt/servise/profile/load");
export const doFetchProfileResult = createAction(
  "lt/servise/profile/fetchresult"
);
