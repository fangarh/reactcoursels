import React from "react";
import { connect } from "react-redux";

import MainPage from "./Components/Main/MainPage";
import LogonPage from "./Components/Logon/LogonPage";

class App extends React.Component {
  render() {
    return <>{this.props.authStatus ? <MainPage /> : <LogonPage />}</>;
  }
}

const mapStateToProps = (state) => ({
  authStatus: state.auth.loggedOn,
  loggedOnError: state.auth.loggedOnError,
  authToken: state.auth.authToken,
});

export default connect(mapStateToProps, null)(App);
