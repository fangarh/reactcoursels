import { createAction } from "redux-actions";

export const doRegister = createAction("lt/servise/auth/Register");
export const doRegisterFail = createAction("lt/servise/auth/Register_Fail");
export const doRegisterSuccess = createAction(
  "lt/servise/auth/RegisterSuccess"
);
export const doLogonAction = createAction("lt/servise/auth/Logon");
export const doLogonFail = createAction("lt/servise/auth/Logon_Fail");
export const doLogonSuccess = createAction("lt/servise/auth/Logon_Success");
export const doLogoff = createAction("lt/servise/auth/Log_Off");
export const doFlushAutoLogon = createAction(
  "lt/servise/auth/Flush_Auto_Log_On"
);
