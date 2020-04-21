import React from "react";
import { connect } from "react-redux";

import MainPage from "./Components/Main/MainPage";
import ProfilePage from "./Components/Profile/ProfilePage";
import LogonPage from "./Components/Logon/LogonPage";
import RegisterForm from "./Components/Logon/RegisterForm";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/Auth/PrivateRout";

class App extends React.Component {
  render() {
    //return <>{this.props.authStatus ? <MainPage /> : <LogonPage />}</>;
    return (
      <>
        <Switch>
          <PrivateRoute
            path="/"
            loginPath="/logon"
            component={MainPage}
            exact
          />
          <Route path="/logon" component={LogonPage} />
          <Route path="/register" component={RegisterForm} />
          <PrivateRoute path="/profile" component={ProfilePage} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authStatus: state.auth.loggedOn,
  loggedOnError: state.auth.loggedOnError,
  authToken: state.auth.authToken,
});

export default connect(mapStateToProps, null)(App);
