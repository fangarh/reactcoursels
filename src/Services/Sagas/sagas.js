import { takeEvery, all } from "redux-saga/effects";
import { doLogonAction, doRegister } from "./../Authorization/actions";
import { doLoadProfile, doSaveProfile } from "./../Profile/actions";
import { logonWorker, registerWorker } from "./workers/logonWorker";

import { loadProfileWorker, saveProfileWorker } from "./workers/profileWorker";

const sagas = [
  takeEvery(doLogonAction, logonWorker),
  takeEvery(doRegister, registerWorker),
  takeEvery(doLoadProfile, loadProfileWorker),
  takeEvery(doSaveProfile, saveProfileWorker),
];

export function* sagaListner() {
  yield all(sagas);
}
