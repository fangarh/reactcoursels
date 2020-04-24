import { createAction } from "redux-actions";

export const doSaveProfile = createAction("lt/servise/profile/Save");

export const doSaveProfileNotified = createAction(
  "lt/servise/profile/SaveNotified"
);
export const doFlushNotifie = createAction("lt/servise/profile/Flush_Notified");
export const doLoadProfile = createAction("lt/servise/profile/Load");
export const doLoadProfileResult = createAction(
  "lt/servise/profile/Fetch_Load_Result"
);
