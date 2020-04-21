import React from "react";
import RouteFillProfileSubForm from "./RouteFillProfileSubForm";
import RouteSelectedRoutSubForm from "./RouteSelectRoutSubForm";
import "./../../css/Main.css";

function RouteForm(props) {
  const verified = !true;

  const profileChanged = () => {
    props.fillProfile();
  };

  return verified ? (
    <RouteSelectedRoutSubForm />
  ) : (
    <RouteFillProfileSubForm fillProfile={profileChanged} />
  );
}

export default RouteForm;
