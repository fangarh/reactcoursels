import React, { useContext, useState } from "react";
import NavigationActions from "../NavigationActions";
import "./Logon.css";
import { AuthContext } from "../Services/AuthProvider";

//class LogonForm extends React.Component {
function LogonForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cont = useContext(AuthContext);

  const goToRegister = (e) => {
    props.parentState(NavigationActions["RegisterForm"]);
  };

  return (
    <AuthContext.Consumer>
      {(values) => {
        return (
          <>
            (
            <form
              onSubmit={(e) => {
                e.preventDefault();

                cont.login(email, password);
              }}
            >
              <div className="LogonForm">
                <div className="LogonInputBlock">
                  <h1>Вход</h1>
                </div>
                <div className="LogonInputBlock labelBlockStyle">
                  <label>Новый пользователь?</label>
                  <label className="RegButton" onClick={goToRegister}>
                    Зарегистрируйтесь!
                  </label>
                </div>
                <div className="LogonInputBlock LogonInput-underline">
                  <input
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="simpleLogonInput LogonInput "
                    placeholder="e-mail"
                  />
                </div>
                <div className="LogonInputBlock  LogonInput-underline">
                  <input
                    id="Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="simpleLogonInput LogonInput "
                    placeholder="Пароль"
                  />
                </div>
                <div>
                  <button type="submit" className="SubmitDiv">
                    Войти
                  </button>
                </div>
              </div>
            </form>
            )
          </>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default LogonForm;
