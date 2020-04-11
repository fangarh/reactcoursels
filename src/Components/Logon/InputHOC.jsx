import React from "react";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";

export function InputHOC(Component) {
  return class ValidatedInput extends React.Component {
    static propTypes = {
      validated: PropTypes.string.isRequired,
      validatetext: PropTypes.string.isRequired,
    };

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

export const ValidableInput = InputHOC(Input);
