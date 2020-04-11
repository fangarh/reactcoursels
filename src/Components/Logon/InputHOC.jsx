import React from "react";

export function InputHOC(Component) {
  return class ValidatedInput extends React.Component {
    render() {
      return (
        <>
          {this.props.validated === "true" ? (
            <label className="validateLabel"></label>
          ) : (
            <label className="validateLabel">{this.props.validatetext}</label>
          )}
          <Component {...this.props} />
        </>
      );
    }
  };
}
