import { call, put } from "redux-saga/effects";

import {
  doLoadRouteSuccess,
  doLoadRouteFail,
  doLoadRoutesListSuccess,
} from "../../StoreLogic/Navigation";

import { loadStarted, loadFinished } from "../../StoreLogic/Animation/actions";

import { fetchJsonGet } from "../workersApi";

export function* loadRoutesListWorker() {
  try {
    const routesList = yield call(() => fetchJsonGet("addressList"));

    yield put(doLoadRoutesListSuccess(routesList.addresses));
  } catch (e) {
    console.log(e);
  }
}

export function* loadRouteWorker(params) {
  yield put({ type: loadStarted.toString() });
  try {
    const { address1, address2 } = params.payload;

    const rout = yield call(() =>
      fetchJsonGet("route", `address1=${address1}&address2=${address2}`, true)
    );

    yield put(doLoadRouteSuccess(rout));
  } catch (e) {
    yield put(doLoadRouteFail(e.toString()));
  }
  yield put({ type: loadFinished.toString() });
}
