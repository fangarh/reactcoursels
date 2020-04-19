import { takeEvery } from "redux-saga/effects";
import { doLogonAction } from "./../Authorization/actions";
import { logonWorker } from "./workers";

export function* sagaListner() {
  yield takeEvery(doLogonAction, logonWorker);
}
