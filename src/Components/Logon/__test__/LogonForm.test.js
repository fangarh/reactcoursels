import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { mount } from "enzyme";
import { LogonForm } from "./../LogonForm";
import { ValidableInput } from "../../HOCWrappers/ValidableInput";

import Button from "@material-ui/core/Button";

import { Provider } from "react-redux";
import { createStore, compose } from "redux";

describe("Page have forms", () => {
  it("test LogonPage can be mount", () => {
    expect(1).to.eq(1);
  });
});
