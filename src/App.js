import React from "react";

import LogonForm from "./Components/Logon/LogonPage";
import MainPage from "./Components/Main/MainPage";
import { AuthContext } from "./Components/Services/AuthProvider";

class App extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(values) => {
          return <>{values.authorized ? <MainPage /> : <LogonForm />}</>;
        }}
      </AuthContext.Consumer>
    );
  }
}

export default App;
