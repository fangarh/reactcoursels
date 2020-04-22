import React from "react";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => ({
  verified: state.profile.profile.verified,
});

export default connect(mapStateToProps, null)(RouteForm);
