import React, { useContext, useState } from "react";
import NavigationActions from "../NavigationActions";
import "./../../css/Logon.css";
import { AuthContext } from "../Services/AuthProvider";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { Logo } from "loft-taxi-mui-theme";
import { InputHOC } from "./InputHOC";

let debug = true;

export const NewInput = InputHOC(Input);

export function LogonForm(props) {
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState("true");
  const [password, setPassword] = useState("");

  const cont = useContext(AuthContext);

  const validate = () => {
    let allValid = true;

    if (email.includes("@") === false) {
      allValid = false;
    }

    if (password.length < 1) {
      allValid = false;
    }

    setValidated(allValid.toString());

    return allValid;
  };

  const validateEmail = () =>
    (email.indexOf("@") > 0 && email.indexOf("@") < email.length - 1) ||
    validated === "true";

  const validatePass = () => password.length > 0 || validated === "true";

  const goToRegister = (e) => {
    props.parentState(NavigationActions["RegisterForm"]);
  };

  return (
    <>
      (
      <Logo animated />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let result = validate();

          if (result) {
            if (debug) console.log("validated");
            else cont.login(email, password);
          }
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
          <div className="LogonInputBlock ">
            <NewInput
              validatetext="Не верный e-mail"
              validated={validateEmail().toString()}
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="simpleLogonInput"
              placeholder="e-mail"
            />
          </div>
          <div className="LogonInputBlock">
            <NewInput
              validatetext="Пароль не может быть пустым"
              validated={validatePass().toString()}
              id="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="simpleLogonInput"
              placeholder="Пароль"
            />
          </div>
          <div className="SubmitDiv">
            <Button
              name="tryLogonBtn"
              type="submit"
              variant="contained"
              color="primary"
            >
              Войти
            </Button>
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

export default LogonForm;
