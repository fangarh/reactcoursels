import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { ValidableInput } from "../HOCWrappers/ValidableInput";
import composedAnimated from "./../HOCWrappers/AnimateWait";
import { doRegister } from "./../../Services/StoreLogic/Authorization/actions";

import { Logo } from "loft-taxi-mui-theme";
import Button from "@material-ui/core/Button";

import css from "./../../css/Logon.module.css";

const divInline = {
  display: "inline-block",
};

const AnimButton = composedAnimated(Button);

class RegisterForm extends React.Component {
  static propTypes = {
    authStatus: PropTypes.bool.isRequired,
    authToken: PropTypes.string,
    loggedOnError: PropTypes.bool,
    error: PropTypes.string,
    doRegister: PropTypes.func.isRequired,
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

  render() {
    const { email, password, firstname, lastname, validated } = this.state;
    let styleCorrection = {
      paddingTop: "5px",
    };
    if (this.props.authStatus) return <Redirect to="/" />;

    return (
      <div className={css.LogonPage}>
        <Logo animated />
        <form onSubmit={this.submitEventHendler}>
          <div className={css.RegisterForm}>
            <div className={css.LogonInputBlock}>
              <h1>Регистрация</h1>
            </div>
            <div className={`${css.LogonInputBlock} ${css.labelBlockStyle}`}>
              <label>Уже зарегистрированы?</label>
              <label className={css.RegButton}>
                <Link to="/logon">Вход!</Link>
              </label>
            </div>
            <div className={css.LogonInputBlock}>
              <ValidableInput
                validatetext="Не верный e-mail"
                validated={(
                  this.validateEmail() || validated === "true"
                ).toString()}
                name="email"
                value={email}
                type="text"
                onChange={this.inputChangedEventHendler}
                className={css.simpleLogonInput}
                placeholder="email"
              />
            </div>
            <div style={divInline}>
              <div className={css.LogonInputBlock} style={divInline}>
                <ValidableInput
                  validatetext="Имя не может быть пустым"
                  validated={(
                    this.validateStr(firstname) || validated === "true"
                  ).toString()}
                  name="firstname"
                  value={firstname}
                  type="text"
                  onChange={this.inputChangedEventHendler}
                  className={css.simpleLogonInput}
                  placeholder="Имя"
                />
              </div>
              <div className={css.LogonInputBlock} style={divInline}>
                <ValidableInput
                  validatetext="Фамилия не может быть пустой"
                  name="lastname"
                  value={lastname}
                  validated={(
                    this.validateStr(lastname) || validated === "true"
                  ).toString()}
                  type="text"
                  onChange={this.inputChangedEventHendler}
                  className={css.simpleLogonInput}
                  placeholder="Фамилия"
                />
              </div>
            </div>
            <div className={css.LogonInputBlock}>
              <ValidableInput
                validatetext="Пароль не может быть пустым"
                validated={(
                  this.validateStr(password) || validated === "true"
                ).toString()}
                name="password"
                value={password}
                onChange={this.inputChangedEventHendler}
                type="password"
                className={css.simpleLogonInput}
                placeholder="Пароль"
              />
            </div>
            <div style={styleCorrection}>
              {this.props.loggedOnError ? (
                <label className={css.validateLabel}>
                  Ошибка при Регистрации: {this.props.error}
                </label>
              ) : (
                <label className={css.validateLabel}></label>
              )}
            </div>
            <div className={css.SubmitDiv}>
              <AnimButton type="submit" variant="contained" color="primary">
                Регистрация
              </AnimButton>
            </div>
          </div>
        </form>
      </div>
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
