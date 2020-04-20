import { takeEvery } from "redux-saga/effects";
import { doLogonAction, doRegister } from "./../Authorization/actions";
import { logonWorker, registerWorker } from "./workers";

export function* sagaListner() {
  yield takeEvery(doLogonAction, logonWorker);
  yield takeEvery(doRegister, registerWorker);
}
