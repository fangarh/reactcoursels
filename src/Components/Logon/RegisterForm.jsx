import React from "react";
import NavigationActions from "../NavigationActions";
import "./../../css/Logon.css";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { Logo } from "loft-taxi-mui-theme";

const divInline = {
  display: "inline-block",
};

class RegisterForm extends React.Component {
  static propTypes = {
    parentState: PropTypes.func.isRequired,
  };

  state = { user: "", password: "", firstname: "", lastname: "" };

  submitEventHendler = (event) => {
    event.preventDefault();

    console.log(this.state.user);
    console.log(this.state.password);

    console.log(this.state.firstname);
    console.log(this.state.lastname);

    // TODO: check if data correct

    this.props.parentState(NavigationActions["LogonForm"]);
  };

  inputChangedEventHendler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  goToLogon = (e) => {
    this.props.parentState(NavigationActions["LogonForm"]);
  };

  render() {
    const { user, password, firstname, lastname } = this.state;

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
              <Input
                id="name"
                name="user"
                value={user}
                type="text"
                onChange={this.inputChangedEventHendler}
                className="simpleLogonInput  "
                placeholder="email"
              />
            </div>
            <div style={divInline}>
              <div className="LogonInputBlock " style={divInline}>
                <Input
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  type="text"
                  onChange={this.inputChangedEventHendler}
                  className="simpleLogonInput  "
                  placeholder="Имя"
                />
              </div>
              <div className="LogonInputBlock " style={divInline}>
                <Input
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  type="text"
                  onChange={this.inputChangedEventHendler}
                  className="simpleLogonInput  "
                  placeholder="Фамилия"
                />
              </div>
            </div>
            <div className="LogonInputBlock  ">
              <Input
                id="Password"
                name="password"
                value={password}
                onChange={this.inputChangedEventHendler}
                type="password"
                className="simpleLogonInput  "
                placeholder="Пароль"
              />
            </div>
            <div className="SubmitDiv">
              <Button type="submit" variant="contained" color="primary">
                Регистрация
              </Button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default RegisterForm;
