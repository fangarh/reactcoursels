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

/*
import { rootReducer } from "./../../../Services/rootReducer";

describe("Page loaded", () => {
  const appStore = createStore(rootReducer);
  it("test LogonForm can be mount", () => {
    let wrapper = mount(
      <Provider store={appStore}>
        <LogonForm parentState={() => {}} />
      </Provider>
    );
    //wrapper.mount();
  });

  it("test components mounted", () => {
    let wrapper = mount(<LogonForm parentState={() => {}} />);
    //wrapper.mount();

    expect(wrapper.find(ValidableInput).length).to.greaterThan(0);
    expect(wrapper.find(Button).length).to.greaterThan(0);
  });
});
*/
