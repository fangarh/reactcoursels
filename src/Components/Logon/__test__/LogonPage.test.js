import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import LogonPage from "./../LogonPage";
import LogonForm from "./../LogonForm";
import Button from "@material-ui/core/Button";
import { expect } from "chai";
import ProfileData from "../../BuisnessObjects/ProfileData";
import AuthContext from "./../../Services/AuthProvider";

describe("Page have forms", () => {
  let wrapper = mount(<LogonPage />);

  it("test LogonPage can be mount", () => {
    wrapper.mount();
  });

  it("Logon Form mounted first", () => {
    expect(wrapper.find("LogonForm")).to.length(1);
  });

  it("Can go to register", () => {
    let navigeteLabel = wrapper.find("LogonPage").find(".RegButton");
    expect(navigeteLabel).to.length(1);

    navigeteLabel.simulate("click");
    expect(wrapper.find("RegisterForm")).to.length(1);
    expect(
      wrapper.find("_some_what_cant_be_founded_in_search_i_hope_RegisterForm")
    ).to.length(0);
  });

  it("Can return from register to logon", () => {
    let navigeteLabel = wrapper.find(".RegButton");
    expect(navigeteLabel).to.length(1);

    navigeteLabel.simulate("click");
    expect(wrapper.find("LogonForm")).to.length(1);
    expect(
      wrapper.find("_some_what_cant_be_founded_in_search_i_hope_LogonForm")
    ).to.length(0);
  });

  it("Logon context check", () => {
    let loginVisited = false;
    const logonFoo = () => {
      console.log("!!!");
      loginVisited = true;
    };
    const context = {
      authorized: false,
      profileData: new ProfileData(),
      login: logonFoo,
    };

    wrapper = mount(<LogonForm parentState={() => {}} />, context);
    wrapper.mount();

    //jest.doMock("./../../Services/AuthContext", () => {});

    expect(wrapper.find(Button)).to.length(1);
    wrapper.find(Button).simulate("click");

    console.log(loginVisited);
  });
});
