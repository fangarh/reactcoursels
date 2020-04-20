import React, { useState } from "react";
import { connect } from "react-redux";
import { doLogonAction } from "./../../Services/Authorization/actions";

import NavigationActions from "../NavigationActions";
import "./../../css/Logon.css";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { Logo } from "loft-taxi-mui-theme";
import { ValidableInput } from "../HOCWrappers/ValidableInput";
import composedAnimated from "./../HOCWrappers/AnimateWait";

function LogonForm(props) {
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState("true");
  const [password, setPassword] = useState("");
  const AnimButton = composedAnimated(Button);
  //  const cont = useContext(AuthContext);

  const validate = () => {
    let allValid = validatePass() && validateEmail();

    setValidated(allValid.toString());

    return allValid;
  };

  const validateEmail = () =>
    email.indexOf("@") > 0 && email.indexOf("@") < email.length - 1;

  const validatePass = () => password.length > 0;

  const goToRegister = (e) => {
    props.parentState(NavigationActions["RegisterForm"]);
  };

  const submit = (e) => {
    e.preventDefault();
    //let componentTest = false;
    //console.log(this.props.doLogon);
    if (validate()) {
      props.doLogonAction({ email, password });

      //      if (componentTest) console.log("validated");
      //      else cont.login(email, password);
    }
  };

  let styleCorrection = {
    paddingTop: "5px",
  };

  return (
    <>
      (
      <Logo animated />
      <form onSubmit={submit}>
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
      )
    </>
  );
}

LogonForm.propTypes = {
  parentState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: state.auth.loggedOn,
  loggedOnError: state.auth.loggedOnErrors,
  authToken: state.auth.authToken,
  error: state.auth.error,
});

const mapDispatchToProps = { doLogonAction };

export default connect(mapStateToProps, mapDispatchToProps)(LogonForm);
