import { takeEvery, all } from "redux-saga/effects";
import { doLogonAction, doRegister } from "./../Authorization/actions";
import { doLoadProfile, doSaveProfile } from "./../Profile/actions";
import {
  logonWorker,
  registerWorker,
  loadProfileWorker,
  saveProfileWorker,
} from "./workers";

const sagas = [
  takeEvery(doLogonAction, logonWorker),
  takeEvery(doRegister, registerWorker),
  takeEvery(doLoadProfile, loadProfileWorker),
  takeEvery(doSaveProfile, saveProfileWorker),
];

export function* sagaListner() {
  yield all(sagas);
}
