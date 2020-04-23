import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import RouteFillProfileSubForm from "./RouteFillProfileSubForm";
import RouteSelectedRoutSubForm from "./RouteSelectRoutSubForm";

import "./../../css/Main.css";

function RouteForm(props) {
  return props.verified ? (
    <RouteSelectedRoutSubForm />
  ) : (
    <RouteFillProfileSubForm />
  );
}

RouteForm.propTypes = {
  verified: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  verified: state.profile.profile.verified,
});

export default connect(mapStateToProps, null)(RouteForm);
