import React from "react";
import ReactDOM from "react-dom";
import LogonForm from "./../LogonForm";

describe("", () => {
  it("test LogonForm can be mount", () => {
    const div = document.createElement("DIV");

    expect(100).toBeWithinRange(90, 110);
    ReactDOM.render(<LogonForm parentState={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
