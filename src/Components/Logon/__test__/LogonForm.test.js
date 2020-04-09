import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { mount } from "enzyme";
import LogonForm from "./../LogonForm";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

describe("Page loaded", () => {
  it("test LogonForm can be mount", () => {
    let wrapper = mount(<LogonForm parentState={() => {}} />);
    wrapper.mount();
  });

  it("test components mounted", () => {
    let wrapper = mount(<LogonForm parentState={() => {}} />);
    //wrapper.mount();

    expect(wrapper.find(Input).length).to.greaterThan(0);
    expect(wrapper.find(Button).length).to.greaterThan(0);
  });
});
