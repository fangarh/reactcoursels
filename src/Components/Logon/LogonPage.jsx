import React from "react";
import AppPages from "./../../AppPages";
import LogonForm from "./LogonForm";
import RegisterForm from "./RegisterForm";
import NavigationActions from "../NavigationActions";
import "./../../css/Logon.css";

class LogonPage extends React.Component {
  state = { userAction: NavigationActions["LogonForm"] };

  buildContentDOM() {
    switch (this.state.userAction) {
      case NavigationActions["LogonForm"]:
        return (
          <div className="LogonPage">
            <LogonForm parentState={this.setNewState} />
          </div>
        );
      case NavigationActions["RegisterForm"]:
        return (
          <div className="LogonPage">
            <RegisterForm parentState={this.setNewState} />
          </div>
        );
      default:
        return null;
    }
  }

  setNewState = (newState) => {
    if (newState === 2) {
      this.props.updateAppState(AppPages["Taxi"]);
    } else this.setState({ userAction: newState });
  };

  render() {
    return <>{this.buildContentDOM()}</>;
  }
}

export default LogonPage;
