import { call, put, select } from "redux-saga/effects";

import {
  doLoadProfileResult,
  doSaveProfileNotified,
} from "../../Reducer/Profile/actions";
import { loadStarted, loadFinished } from "../../Reducer/Animation/actions";

import { fetchJson, fetchJsonGet } from "../workersApi";

const getToken = (state) => state.auth.authToken;
const getProfile = (state) => state.profile.profile;

export function* loadProfileWorker(params) {
  var token = yield select(getToken);

  const profile = yield call(() => fetchJsonGet("card", "token=" + token));

  yield put({ type: doLoadProfileResult.toString(), payload: profile });
}
export function* saveProfileWorker() {
  yield put({ type: loadStarted.toString() });
  try {
    var token = yield select(getToken);
    var profile = yield select(getProfile);

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
