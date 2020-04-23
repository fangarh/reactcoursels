import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "./Components/Main/MainPage";
import ProfilePage from "./Components/Profile/ProfilePage";
import LogonForm from "./Components/Logon/LogonForm";
import RegisterForm from "./Components/Logon/RegisterForm";
import PrivateRoute from "./Components/Auth/PrivateRout";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <PrivateRoute
            path="/"
            loginPath="/logon"
            component={MainPage}
            exact
          />
          <Route path="/logon" component={LogonForm} />
          <Route path="/register" component={RegisterForm} />
          <PrivateRoute path="/profile" component={ProfilePage} />
        </Switch>
      </>
    );
  }
}

export default App;
