import React from "react";
import PropTypes from "prop-types";

import RouteFillProfileSubForm from "./RouteFillProfileSubForm";
import RouteSelectedRoutSubForm from "./RouteSelectRoutSubForm";

function RouteForm(props) {
  return props.verified ? (
    <RouteSelectedRoutSubForm
      avaliablePoints={props.avaliablePoints}
      error={props.error}
      doLoadRoute={props.doLoadRoute}
    />
  ) : (
    <RouteFillProfileSubForm error={props.error} pError={props.pError} />
  );
}

RouteForm.propTypes = {
  verified: PropTypes.bool.isRequired,
  error: PropTypes.string,
  pError: PropTypes.string,
  avaliablePoints: PropTypes.array,
  doLoadRoute: PropTypes.func.isRequired,
};

export default RouteForm;
