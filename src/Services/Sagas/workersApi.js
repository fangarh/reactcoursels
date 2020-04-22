export async function fetchJsonGet(method, params, thr = false) {
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
    if (thr) throw e;
  }

  return result;
}

export async function fetchJson(json, method, thr = false) {
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
    if (thr) throw e;
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
