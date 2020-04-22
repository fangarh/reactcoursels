import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { put, call } from "redux-saga/effects";

import { logonWorker, registerWorker } from "../workers/logonWorker";

import * as actions from "../../Authorization/actions";
import * as animActions from "../../Animation/actions";

describe("check auth sagas", () => {
  let gen = logonWorker(actions.doLogonAction);

  it("logon saga anim started", () => {
    expect(gen.next().value).to.eqls(
      put({ type: animActions.loadStarted.toString() })
    );
  });

  it("logon saga data recive success", () => {
    gen.next(); //emulate fetch
    let result = gen.next({ success: true, token: "123" }).value;
    expect(result).to.eqls(
      put({ type: actions.doLogonSuccess.toString(), payload: "123" })
    );
    expect(result).to.not.eqls(
      put({ type: actions.doLogonSuccess.toString(), payload: "1243" })
    );
  });
  it("animation stops in all way", () => {
    gen.next();
    gen.next();
    expect(gen.next().value).to.eqls(
      put({ type: animActions.loadFinished.toString() })
    );
    gen = logonWorker(actions.doLogonAction);
    gen.next();

    gen.next({ success: false, token: "error" });
    expect(gen.next().value).to.eqls(
      put({
        type: actions.doLogonFail.toString(),
        payload: "TypeError: Cannot read property 'success' of undefined",
      })
    );
    expect(gen.next().value).to.eqls(
      put({ type: animActions.loadFinished.toString() })
    );
  });

  it("logon saga anim started", () => {});
});
