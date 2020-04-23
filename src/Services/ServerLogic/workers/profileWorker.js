import { call, put, select } from "redux-saga/effects";

import {
  doLoadProfileResult,
  doSaveProfileNotified,
} from "../../StoreLogic/Profile/actions";
import { loadStarted, loadFinished } from "../../StoreLogic/Animation/actions";
import { getProfile } from "../../StoreLogic/Profile/selectors";
import { getToken } from "../../StoreLogic/Authorization/selectors";

import { fetchJson, fetchJsonGet } from "../workersApi";

export function* loadProfileWorker() {
  try {
    const token = yield select(getToken);

    const profile = yield call(() =>
      fetchJsonGet("card", "token=" + token, true)
    );

    yield put({ type: doLoadProfileResult.toString(), payload: profile });
  } catch (e) {
    yield put({
      type: doSaveProfileNotified.toString(),
      payload: { success: false, error: e.toString() },
    });
  }
}
export function* saveProfileWorker() {
  yield put({ type: loadStarted.toString() });
  try {
    const token = yield select(getToken);
    const profile = yield select(getProfile);

    const saveRes = yield call(() =>
      fetchJson(profile.buildJson(token), "card", true)
    );

    yield put({
      type: doSaveProfileNotified.toString(),
      payload: { success: saveRes.success, error: saveRes.error },
    });
  } catch (e) {
    yield put({
      type: doSaveProfileNotified.toString(),
      payload: { success: false, error: e.toString() },
    });
  }
  yield put({ type: loadFinished.toString() });
}
