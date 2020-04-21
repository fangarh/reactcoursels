import { call, put, select } from "redux-saga/effects";
import { doLogonSuccess, doLogonFail } from "./../Authorization/actions";
import { doLoadProfile, doSaveProfile } from "./../Profile/actions";
import { loadStarted, loadFinished } from "./../Animation/actions";

export function* logonWorker(params) {
  yield put({ type: loadStarted.toString() });
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
export const getToken = (state) => state.auth.authToken;

export function* loadProfileWorker(params) {
  var token = yield select(getToken);

  const profile = yield call(() => fetchJsonGet("card", "token=" + token));
  yield console.log(profile);
}
export function* saveProfileWorker(params) {
  yield console.log(params);
}

async function fetchJsonGet(method, params) {
  try {
    const response = await fetch(
      "https://loft-taxi.glitch.me/" + method + "?" + params,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    var result = await response.json();
  } catch (e) {
    console.log(e);
  }

  return result;
}

async function fetchJson(json, method) {
  try {
    const response = await fetch("https://loft-taxi.glitch.me/" + method, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    });

    var result = await response.json();
  } catch (e) {
    console.log(e);
  }

  return result;
}
/*

import { call } from "redux-saga/effects";
const logIn = (data) =>
  fetch("https://loft-taxi.glitch.me/auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export function* logonWorker(action) {
  const {
    payload: { email, password },
  } = action;
  const data = {
    email,
    password,
  };
  console.log(data);
  const result = yield call(() => logIn(data));
  console.log(result.json());
  return result;
}
*/
