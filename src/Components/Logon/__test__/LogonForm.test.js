import React from "react";
import ReactDOM from "react-dom";
import { expect } from "chai";
import { mount } from "enzyme";
import LogonForm from "./../LogonForm";

describe("Page loaded", () => {
  it("test LogonForm can be mount", () => {
    let wrapper = mount(<LogonForm parentState={() => {}} />);
    wrapper.mount();
  });
});
