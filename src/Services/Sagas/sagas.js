import { takeEvery, all } from "redux-saga/effects";

import { doLogonAction, doRegister } from "./../Authorization/actions";
import { doLoadProfile, doSaveProfile } from "./../Profile/actions";

import { logonWorker, registerWorker } from "./workers/logonWorker";
import { loadRouteWorker, loadRoutesListWorker } from "./workers/routeWorker";
import { loadProfileWorker, saveProfileWorker } from "./workers/profileWorker";
import { doLoadRoute, doLoadRoutesList } from "./../Navigation";

const sagas = [
  takeEvery(doLogonAction, logonWorker),
  takeEvery(doRegister, registerWorker),
  takeEvery(doLoadProfile, loadProfileWorker),
  takeEvery(doSaveProfile, saveProfileWorker),
  takeEvery(doLoadRoute, loadRouteWorker),
  takeEvery(doLoadRoutesList, loadRoutesListWorker),
];

export function* sagaListner() {
  yield all(sagas);
}
