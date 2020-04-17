import React from "react";
import "./Main.css";

class RouteFillProfileSubForm extends React.Component {
  goToFillForm = (e) => {
    this.props.fillProfile();
  };

  render() {
    return (
      <div className="RouteForm">
        need fill profile
        <input type="button" onClick={this.goToFillForm}></input>
      </div>
    );
  }
}

export default RouteFillProfileSubForm;
