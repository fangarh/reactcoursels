import { createAction } from "redux-actions";

export const doSaveProfile = createAction("lt/servise/profile/save");

export const doSaveProfileNotified = createAction(
  "lt/servise/profile/savenotified"
);
export const doFlushNotifie = createAction("lt/servise/profile/flushnotified");
export const doLoadProfile = createAction("lt/servise/profile/load");
export const doLoadProfileResult = createAction(
  "lt/servise/profile/fetchloadresult"
);
