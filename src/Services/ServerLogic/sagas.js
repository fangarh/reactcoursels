import { takeEvery, all } from "redux-saga/effects";

import {
  doLogonAction,
  doRegister,
} from "./../StoreLogic/Authorization/actions";
import { doLoadProfile, doSaveProfile } from "./../StoreLogic/Profile/actions";
import { doLoadRoute, doLoadRoutesList } from "./../StoreLogic/Navigation";

import { logonWorker, registerWorker } from "./workers/logonWorker";
import { loadRouteWorker, loadRoutesListWorker } from "./workers/routeWorker";
import { loadProfileWorker, saveProfileWorker } from "./workers/profileWorker";

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
