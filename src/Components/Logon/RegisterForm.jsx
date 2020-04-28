import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { ValidableInput } from "../HOCWrappers/ValidableInput";
import composedAnimated from "./../HOCWrappers/AnimateWait";
import { doRegister } from "./../../Services/StoreLogic/Authorization/actions";
import { nextLocal } from "./../../Services/StoreLogic/Local/actions";

import { Logo } from "loft-taxi-mui-theme";
import { useIntl } from "react-intl";
import Button from "@material-ui/core/Button";

import css from "./../../css/Logon.module.css";

const divInline = {
  display: "inline-block",
};

const AnimButton = composedAnimated(Button);

const RegisterForm = (props) => {
  const intl = useIntl();

  const intlMsg = (props) => {
    return intl.formatMessage({ id: props });
  };

  const validateEmail = () =>
    email.indexOf("@") > 0 && email.indexOf("@") < email.length - 1;

  const validateStr = (str) => str.length > 0;

  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState("true");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const validate = () => {
    let allValid =
      validateStr(password) &&
      validateStr(firstname) &&
      validateStr(lastname) &&
      validateEmail();

    setValidated(allValid.toString());

    return allValid;
  };

  const submitEventHendler = (event) => {
    event.preventDefault();

    if (!validate()) return;

    let userData = {
      email: email,
      password: password,
      name: firstname,
      surname: lastname,
    };

    props.doRegister(userData);
  };

  let styleCorrection = {
    paddingTop: "5px",
  };
  if (props.authStatus) return <Redirect to="/" />;

  const localeChange = (e) => {
    props.nextLocal();
  };

  return (
    <>
      <label className={css.LangButton} onClick={localeChange}>
        {props.nextLocale}
      </label>
      <div className={css.LogonPage}>
        <Logo animated />
        <form onSubmit={submitEventHendler}>
          <div className={css.RegisterForm}>
            <div className={css.LogonInputBlock}>
              <h1>{intlMsg("logon.registerform.title")}</h1>
            </div>
            <div className={`${css.LogonInputBlock} ${css.labelBlockStyle}`}>
              <label>{intlMsg("logon.registerform.havePass")}</label>
              <label className={css.RegButton}>
                <Link to="/logon">
                  {intlMsg("logon.registerform.logonBtn")}
                </Link>
              </label>
            </div>
            <div className={css.LogonInputBlock}>
              <ValidableInput
                validatetext={intlMsg("logon.registerform.warnEmail")}
                validated={(validateEmail() || validated === "true").toString()}
                name="email"
                value={email}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className={css.simpleLogonInput}
                placeholder="email"
              />
            </div>
            <div style={divInline}>
              <div className={css.LogonInputBlock} style={divInline}>
                <ValidableInput
                  validatetext={intlMsg("logon.registerform.warnName")}
                  validated={(
                    validateStr(firstname) || validated === "true"
                  ).toString()}
                  name="firstname"
                  value={firstname}
                  type="text"
                  onChange={(e) => setFirstname(e.target.value)}
                  className={css.simpleLogonInput}
                  placeholder={intlMsg("logon.registerform.lblName")}
                />
              </div>
              <div className={css.LogonInputBlock} style={divInline}>
                <ValidableInput
                  validatetext={intlMsg("logon.registerform.warnSurname")}
                  name="lastname"
                  value={lastname}
                  validated={(
                    validateStr(lastname) || validated === "true"
                  ).toString()}
                  type="text"
                  onChange={(e) => setLastname(e.target.value)}
                  className={css.simpleLogonInput}
                  placeholder={intlMsg("logon.registerform.lblSurname")}
                />
              </div>
            </div>
            <div className={css.LogonInputBlock}>
              <ValidableInput
                validatetext={intlMsg("logon.registerform.warnPass")}
                validated={(
                  validateStr(password) || validated === "true"
                ).toString()}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className={css.simpleLogonInput}
                placeholder={intlMsg("logon.registerform.lblPass")}
              />
            </div>
            <div style={styleCorrection}>
              {props.loggedOnError ? (
                <label className={css.validateLabel}>
                  {intlMsg("logon.registerform.warnRegErr")} {this.props.error}
                </label>
              ) : (
                <label className={css.validateLabel}></label>
              )}
            </div>
            <div className={css.SubmitDiv}>
              <AnimButton type="submit" variant="contained" color="primary">
                {intlMsg("logon.registerform.doReg")}
              </AnimButton>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

RegisterForm.propTypes = {
  authStatus: PropTypes.bool.isRequired,
  authToken: PropTypes.string,
  loggedOnError: PropTypes.bool,
  error: PropTypes.string,
  doRegister: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: state.auth.loggedOn,
  loggedOnError: state.auth.loggedOnErrors,
  authToken: state.auth.authToken,
  error: state.auth.error,
  nextLocale: state.locale.nextLocaleName,
});

const mapDispatchToProps = { doRegister, nextLocal };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
