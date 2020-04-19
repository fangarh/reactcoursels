import { call, put } from "redux-saga/effects";
import { doLogonSuccess, doLogonFail } from "./../Authorization/actions";

export function* logonWorker(params) {
  const authRes = yield call(() =>
    logon(params.payload.email, params.payload.password)
  );

  if (authRes.success)
    yield put({ type: doLogonSuccess.toString(), payload: authRes.token });
  else yield put({ type: doLogonFail.toString(), payload: authRes.error });
}

async function logon(login, password) {
  try {
    const response = await fetch("https://loft-taxi.glitch.me/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: login,
        password: password,
      }),
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
