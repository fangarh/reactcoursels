import React from "react";
import PropTypes from "prop-types";

import RouteFillProfileSubForm from "./RouteFillProfileSubForm";
import RouteSelectedRoutSubForm from "./RouteSelectRoutSubForm";
import { AskRecallTaxi } from "./AskRecallTaxi";

function RouteForm(props) {
  return props.verified ? (
    props.taxiCalled ? (
      <AskRecallTaxi recallTaxi={props.recallTaxi} />
    ) : (
      <RouteSelectedRoutSubForm
        avaliablePoints={props.avaliablePoints}
        error={props.error}
        doLoadRoute={props.doLoadRoute}
        recallTaxi={props.recallTaxi}
      />
    )
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
  taxiCalled: PropTypes.bool.isRequired,
  recallTaxi: PropTypes.func.isRequired,
};

export default RouteForm;
