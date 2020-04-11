import React, { useContext, useState } from "react";
import NavigationActions from "../NavigationActions";
import "./../../css/Logon.css";
import { AuthContext } from "../Services/AuthProvider";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { Logo } from "loft-taxi-mui-theme";

let debug = true;

function testHOC(Component) {
  return class ValidatedInput extends React.Component {
    render() {
      //if (!this.props.validate) return <Component {...this.props} />;

      return (
        <>
          {this.props.validated === "true" ? (
            <label className="validateLabel"> </label>
          ) : (
            <label className="validateLabel">{this.props.validatetext}</label>
          )}
          <Component {...this.props} />
        </>
      );
    }
  };
}

const NewInput = testHOC(Input);
//class LogonForm extends React.Component {
function LogonForm(props) {
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState("true");
  const [password, setPassword] = useState("");

  const cont = useContext(AuthContext);
  var formStyle = {
    height: "330px",
  };

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

          if (result)
            if (debug) console.log("validated");
            else cont.login(email, password);
          else formStyle = { height: "360px" };
        }}
      >
        <div className="LogonForm" style={formStyle}>
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
              validated={validated}
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
              validated={validated}
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
