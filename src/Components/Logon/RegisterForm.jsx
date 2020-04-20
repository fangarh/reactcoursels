import React from "react";
import NavigationActions from "../NavigationActions";
import "./../../css/Logon.css";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { Logo } from "loft-taxi-mui-theme";
import { ValidableInput } from "../HOCWrappers/ValidableInput";
import composedAnimated from "./../HOCWrappers/AnimateWait";
import { connect } from "react-redux";
import { doRegister } from "./../../Services/Authorization/actions";

const divInline = {
  display: "inline-block",
};

const AnimButton = composedAnimated(Button);

class RegisterForm extends React.Component {
  static propTypes = {
    parentState: PropTypes.func.isRequired,
  };

  validateEmail = () =>
    this.state.email.indexOf("@") > 0 &&
    this.state.email.indexOf("@") < this.state.email.length - 1;

  validateStr = (str) => str.length > 0;

  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    validated: "true",
  };

  validate = () => {
    const { password, firstname, lastname } = this.state;

    let allValid =
      this.validateStr(password) &&
      this.validateStr(firstname) &&
      this.validateStr(lastname) &&
      this.validateEmail();

    this.setState({ validated: allValid.toString() });

    return allValid;
  };

  submitEventHendler = (event) => {
    event.preventDefault();

    if (!this.validate()) return;

    console.log(this.state.email);
    console.log(this.state.password);

    console.log(this.state.firstname);
    console.log(this.state.lastname);

    let userData = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.firstname,
      surname: this.state.lastname,
    };

    this.props.doRegister(userData);
  };

  inputChangedEventHendler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  goToLogon = (e) => {
    this.props.parentState(NavigationActions["LogonForm"]);
  };

  render() {
    const { email, password, firstname, lastname, validated } = this.state;
    let styleCorrection = {
      paddingTop: "5px",
    };

    return (
      <>
        <Logo animated />
        <form onSubmit={this.submitEventHendler}>
          <div className="RegisterForm">
            <div className="LogonInputBlock">
              <h1>Регистрация</h1>
            </div>
            <div className="LogonInputBlock labelBlockStyle">
              <label>Уже зарегистрированы?</label>
              <label className="RegButton" onClick={this.goToLogon}>
                Вход!
              </label>
            </div>
            <div className="LogonInputBlock ">
              <ValidableInput
                id="name"
                validatetext="Не верный e-mail"
                validated={(
                  this.validateEmail() || validated === "true"
                ).toString()}
                name="email"
                value={email}
                type="text"
                onChange={this.inputChangedEventHendler}
                className="simpleLogonInput  "
                placeholder="email"
              />
            </div>
            <div style={divInline}>
              <div className="LogonInputBlock " style={divInline}>
                <ValidableInput
                  id="firstname"
                  validatetext="Имя не может быть пустым"
                  validated={(
                    this.validateStr(firstname) || validated === "true"
                  ).toString()}
                  name="firstname"
                  value={firstname}
                  type="text"
                  onChange={this.inputChangedEventHendler}
                  className="simpleLogonInput  "
                  placeholder="Имя"
                />
              </div>
              <div className="LogonInputBlock " style={divInline}>
                <ValidableInput
                  id="lastname"
                  validatetext="Фамилия не может быть пустой"
                  name="lastname"
                  value={lastname}
                  validated={(
                    this.validateStr(lastname) || validated === "true"
                  ).toString()}
                  type="text"
                  onChange={this.inputChangedEventHendler}
                  className="simpleLogonInput  "
                  placeholder="Фамилия"
                />
              </div>
            </div>
            <div className="LogonInputBlock  ">
              <ValidableInput
                id="Password"
                validatetext="Пароль не может быть пустым"
                validated={(
                  this.validateStr(password) || validated === "true"
                ).toString()}
                name="password"
                value={password}
                onChange={this.inputChangedEventHendler}
                type="password"
                className="simpleLogonInput  "
                placeholder="Пароль"
              />
            </div>
            <div style={styleCorrection}>
              {this.props.loggedOnError ? (
                <label className="validateLabel">
                  Ошибка при Регистрации: {this.props.error}
                </label>
              ) : (
                <label className="validateLabel"></label>
              )}
            </div>
            <div className="SubmitDiv">
              <AnimButton type="submit" variant="contained" color="primary">
                Регистрация
              </AnimButton>
            </div>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authStatus: state.auth.loggedOn,
  loggedOnError: state.auth.loggedOnErrors,
  authToken: state.auth.authToken,
  error: state.auth.error,
});

const mapDispatchToProps = { doRegister };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
