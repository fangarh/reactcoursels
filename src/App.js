import React from "react";
import MainPage from "./Components/Main/MainPage";
import { AuthContext } from "./Components/Services/AuthProvider";
import LogonPage from "./Components/Logon/LogonPage";

class App extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(values) => {
          return <>{values.authorized ? <MainPage /> : <LogonPage />}</>;
        }}
      </AuthContext.Consumer>
    );
  }
}

export default App;
