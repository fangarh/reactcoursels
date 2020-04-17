import React from "react";
import RouteFillProfileSubForm from "./RouteFillProfileSubForm";
import RouteSelectedRoutSubForm from "./RouteSelectRoutSubForm";
import "./Main.css";
class RouteForm extends React.Component {
  state = { isProfileDataExists: this.props.profileFilled };

  buildFormDOM() {
    return this.state.isProfileDataExists === 0 ? (
      <RouteFillProfileSubForm fillProfile={this.profileChanged} />
    ) : (
      <RouteSelectedRoutSubForm />
    );
  }

  profileChanged = () => {
    this.props.fillProfile();
    this.setState({ isProfileDataExists: 1 });
  };

  render() {
    return <>{this.buildFormDOM()}</>;
  }
}

export default RouteForm;
