import { createAction } from "redux-actions";

export const doRegister = createAction("lt/servise/auth/register");
export const doRegisterFail = createAction("lt/servise/auth/registerfail");
export const doRegisterSuccess = createAction(
  "lt/servise/auth/registersuccess"
);
export const doLogonAction = createAction("lt/servise/auth/logon");
export const doLogonFail = createAction("lt/servise/auth/logonfail");
export const doLogonSuccess = createAction("lt/servise/auth/logonsuccess");
export const doLogoff = createAction("lt/servise/auth/logoff");
export const doFlushAutoLogon = createAction("lt/servise/auth/flushAutoLogOn");
