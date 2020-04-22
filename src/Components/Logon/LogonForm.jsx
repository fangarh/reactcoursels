import React, { useState } from "react";
import { connect } from "react-redux";
import { doLogonAction } from "./../../Services/StoreLogic/Authorization/actions";
import { Redirect } from "react-router-dom";
import { ValidableInput } from "../HOCWrappers/ValidableInput";
import composedAnimated from "./../HOCWrappers/AnimateWait";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { Logo } from "loft-taxi-mui-theme";

import "./../../css/Logon.css";

function LogonForm(props) {
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState("true");
  const [password, setPassword] = useState("");
  const AnimButton = composedAnimated(Button);

  const validate = () => {
    let allValid = validatePass() && validateEmail();

    setValidated(allValid.toString());

    return allValid;
  };

  const validateEmail = () =>
    email.indexOf("@") > 0 && email.indexOf("@") < email.length - 1;

  const validatePass = () => password.length > 0;

  const submit = (e) => {
    e.preventDefault();

    if (validate()) {
      props.doLogonAction({ email, password });
    }
  };

  let styleCorrection = {
    paddingTop: "5px",
  };

  if (props.authStatus) return <Redirect to="/" />;

  return (
    <>
      (
      <div className="LogonPage">
        <Logo animated />
        <form onSubmit={submit}>
          <div className="LogonForm">
            <div className="LogonInputBlock">
              <h1>Вход</h1>
            </div>
            <div className="LogonInputBlock labelBlockStyle">
              <label>Новый пользователь?</label>

              <label className="RegButton">
                <Link to="/register">Зарегистрируйтесь!</Link>
              </label>
            </div>
            <div className="LogonInputBlock ">
              <ValidableInput
                validatetext="Не верный e-mail"
                validated={(validateEmail() || validated === "true").toString()}
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="simpleLogonInput"
                placeholder="e-mail"
              />
            </div>
            <div className="LogonInputBlock">
              <ValidableInput
                validatetext="Пароль не может быть пустым"
                validated={(validatePass() || validated === "true").toString()}
                id="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="simpleLogonInput"
                placeholder="Пароль"
              />
            </div>
            <div style={styleCorrection}>
              {props.loggedOnError ? (
                <label className="validateLabel">
                  Ошибка при входе: {props.error}
                </label>
              ) : (
                <label className="validateLabel"></label>
              )}
            </div>
            <div className="SubmitDiv">
              <AnimButton
                name="tryLogonBtn"
                type="submit"
                variant="contained"
                color="primary"
              >
                Войти
              </AnimButton>
            </div>
          </div>
        </form>
      </div>
      )
    </>
  );
}

const mapStateToProps = (state) => ({
  authStatus: state.auth.loggedOn,
  loggedOnError: state.auth.loggedOnErrors,
  authToken: state.auth.authToken,
  error: state.auth.error,
});

const mapDispatchToProps = { doLogonAction };

export default connect(mapStateToProps, mapDispatchToProps)(LogonForm);
