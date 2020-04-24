import React from "react";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import css from "../../css/Logon.module.css";

export function ValidationHOC(Component) {
  return class ValidatedInput extends React.Component {
    static propTypes = {
      validated: PropTypes.string.isRequired,
      validatetext: PropTypes.string.isRequired,
    };

    render() {
      return (
        <>
          {this.props.validated === "true" ? (
            <label className={css.validateLabel}></label>
          ) : (
            <label className={css.validateLabel}>
              {this.props.validatetext}
            </label>
          )}
          <Component {...this.props} />
        </>
      );
    }
  };
}

export const ValidableInput = ValidationHOC(Input);
