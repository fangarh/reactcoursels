import React from "react";
import RouteFillProfileSubForm from "./RouteFillProfileSubForm";
import RouteSelectedRoutSubForm from "./RouteSelectRoutSubForm";
import "./../../css/Main.css";
import { AuthContext } from "../Auth/AuthProvider";

function RouteForm(props) {
  const cont = React.useContext(AuthContext);

  const profileChanged = () => {
    props.fillProfile();
  };

  return cont.profileData.verified ? (
    <RouteSelectedRoutSubForm />
  ) : (
    <RouteFillProfileSubForm fillProfile={profileChanged} />
  );
}

export default RouteForm;
