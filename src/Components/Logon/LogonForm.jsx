import React, { useState } from "react";
import { connect } from "react-redux";
import { doLogonAction } from "./../../Services/StoreLogic/Authorization/actions";
import { nextLocal } from "./../../Services/StoreLogic/Local/actions";
import { Redirect } from "react-router-dom";
import { ValidableInput } from "../HOCWrappers/ValidableInput";
import composedAnimated from "./../HOCWrappers/AnimateWait";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FormattedMessage, useIntl } from "react-intl";

import Button from "@material-ui/core/Button";
import { Logo } from "loft-taxi-mui-theme";

import css from "./../../css/Logon.module.css";

function LogonForm(props) {
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState("true");
  const [password, setPassword] = useState("");
  const AnimButton = composedAnimated(Button);
  const intl = useIntl();

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

  const localeChange = (e) => {
    props.nextLocal();
  };

  if (props.authStatus) return <Redirect to="/" />;

  return (
    <>
      <label className={css.LangButton} onClick={localeChange}>
        {props.nextLocale}
      </label>
      <div className={css.LogonPage}>
        <Logo animated />
        <form onSubmit={submit}>
          <div className={css.LogonForm}>
            <div className={css.LogonInputBlock}>
              <h1>
                <FormattedMessage
                  id="logon.logonform.title"
                  defaultMessage="Вход"
                />
              </h1>
            </div>
            <div className={`${css.LogonInputBlock} ${css.labelBlockStyle}`}>
              <label>
                <FormattedMessage
                  id="logon.logonform.newUser"
                  defaultMessage="Новый пользователь?"
                />
              </label>

              <label className={css.RegButton}>
                <Link to="/register">
                  <FormattedMessage
                    id="logon.logonform.newUserReg"
                    defaultMessage="Зарегистрируйтесь!"
                  />
                </Link>
              </label>
            </div>
            <div className={css.LogonInputBlock}>
              <ValidableInput
                validatetext={intl.formatMessage({
                  id: "logon.logonform.emailValidator",
                })}
                validated={(validateEmail() || validated === "true").toString()}
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={css.simpleLogonInput}
                placeholder="e-mail"
              />
            </div>
            <div className={css.LogonInputBlock}>
              <ValidableInput
                validatetext={intl.formatMessage({
                  id: "logon.logonform.passwordValidator",
                })}
                validated={(validatePass() || validated === "true").toString()}
                id="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className={css.simpleLogonInput}
                placeholder={intl.formatMessage({
                  id: "logon.logonform.passwordPlsHold",
                })}
              />
            </div>
            <div style={styleCorrection}>
              {props.loggedOnError ? (
                <label className={css.validateLabel}>
                  {intl.formatMessage({
                    id: "logon.logonform.logonError",
                  })}
                  {props.error}
                </label>
              ) : (
                <label className={css.validateLabel}></label>
              )}
            </div>
            <div className={css.SubmitDiv}>
              <AnimButton
                name="tryLogonBtn"
                type="submit"
                variant="contained"
                color="primary"
              >
                <FormattedMessage
                  id="logon.logonform.logonButton"
                  defaultMessage="Войти"
                />
              </AnimButton>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

LogonForm.propTypes = {
  authStatus: PropTypes.bool.isRequired,
  authToken: PropTypes.string,
  loggedOnError: PropTypes.bool,
  error: PropTypes.string,
  doLogonAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: state.auth.loggedOn,
  loggedOnError: state.auth.loggedOnErrors,
  authToken: state.auth.authToken,
  error: state.auth.error,
  nextLocale: state.locale.nextLocaleName,
});

const mapDispatchToProps = { doLogonAction, nextLocal };

export default connect(mapStateToProps, mapDispatchToProps)(LogonForm);
