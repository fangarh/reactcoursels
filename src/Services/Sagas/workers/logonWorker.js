import { call, put } from "redux-saga/effects";
import { doLogonSuccess, doLogonFail } from "./../../Authorization/actions";
import { doLoadProfile } from "./../../Profile/actions";
import { loadStarted, loadFinished } from "./../../Animation/actions";
import { fetchJson } from "../workersApi";

export function* logonWorker(params) {
  yield put({ type: loadStarted.toString() });
  try {
    const authRes = yield call(() =>
      fetchJson(
        { email: params.payload.email, password: params.payload.password },
        "auth"
      )
    );

    if (authRes.success) {
      yield put({ type: doLogonSuccess.toString(), payload: authRes.token });
      yield put({ type: doLoadProfile.toString() });
    } else yield put({ type: doLogonFail.toString(), payload: authRes.error });
  } catch (e) {
    yield put({ type: doLogonFail.toString(), payload: e.toString() });
  }
  yield put({ type: loadFinished.toString() });
}

export function* registerWorker(params) {
  yield put({ type: loadStarted.toString() });

  const authRes = yield call(() => fetchJson(params.payload, "register"));

  if (authRes.success)
    yield put({ type: doLogonSuccess.toString(), payload: authRes.token });
  else yield put({ type: doLogonFail.toString(), payload: authRes.error });

  yield put({ type: loadFinished.toString() });
}
