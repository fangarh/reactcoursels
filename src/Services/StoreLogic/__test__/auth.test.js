import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { put, call } from "redux-saga/effects";
import { authReducer, initialState } from "../Authorization/authReducer";
import * as act from "../Authorization/actions";

describe("check auth reducer", () => {
  it("logon action check", () => {
    const init = authReducer(undefined, "test");
    const testState = authReducer(initialState, act.doLogonAction());

    expect(testState.authToken).to.eqls.toString("");
    expect(testState.loggedOn).to.eqls(false);
    expect(testState.autoLogOn).to.eqls(false);
    expect(testState.loggedOnErrors).to.eqls.toString("");
  });

  it("logon fail action check", () => {
    const init = authReducer(undefined, "test");
    const testState = authReducer(initialState, act.doLogonFail("!!!"));

    expect(testState.authToken).to.eqls.toString("");
    expect(testState.error).to.eqls.toString("!!!");
    expect(testState.loggedOn).to.eqls(false);
    expect(testState.loggedOn).to.eqls(false);
    expect(testState.autoLogOn).to.eqls(false);
    expect(testState.loggedOnErrors).to.eqls(true);
  });

  it("logon success action check", () => {
    const init = authReducer(undefined, "test");
    const testState = authReducer(initialState, act.doLogonSuccess("!!!!"));

    expect(testState.authToken).to.eqls("!!!!");
    expect(testState.error).to.eqls.toString("");
    expect(testState.loggedOn).to.eqls(true);
    expect(testState.autoLogOn).to.eqls(false);
    expect(testState.loggedOnErrors).to.eqls(false);
  });

  it("logon success action check", () => {
    const init = authReducer(undefined, "test");
    const testState = authReducer(initialState, act.doLogoff());

    expect(testState.authToken).to.eqls("");
    expect(testState.error).to.eqls.toString("");
    expect(testState.loggedOn).to.eqls(false);
    expect(testState.autoLogOn).to.eqls(false);
    expect(testState.loggedOnErrors).to.eqls(false);
  });
});
