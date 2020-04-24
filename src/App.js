import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "./Components/Main/MainPage";
import LogonForm from "./Components/Logon/LogonForm";
import RegisterForm from "./Components/Logon/RegisterForm";
import PrivateRoute from "./Components/Auth/PrivateRout";

function App() {
  return (
    <>
      <Switch>
        <Route path="/logon" component={LogonForm} />
        <Route path="/register" component={RegisterForm} />
        <PrivateRoute path="/" loginPath="/logon" component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
