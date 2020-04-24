import React from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProfileData from "../../BuisnessObjects/ProfileData";
import { allertDanger } from "../allertDanger";

import composedAnimated from "./../HOCWrappers/AnimateWait";

import {
  doSaveProfile,
  doFlushNotifie,
} from "../../Services/StoreLogic/Profile/actions";
import {
  expDateFormated,
  expProfileError,
} from "../../Services/StoreLogic/Profile/selectors";

import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { DatePicker } from "@material-ui/pickers";

import css from "./../../css/Profile.module.css";

const AnimButton = composedAnimated(Button);

function ProfilePage(props) {
  const [CardId, setCardId] = React.useState(
    props.cardNum ? props.cardNum : ""
  );
  const [HolderName, setHolderName] = React.useState(
    props.holderName ? props.holderName : ""
  );
  const [Cvv, setCvv] = React.useState(props.cvv ? props.cvv : "");
  const [Exp, setExp] = React.useState(props.expDate);
  const [validErr, setValidErr] = React.useState("");
  const [needNotifie, setNeedNotifie] = React.useState("unknown");

  const validateForm = () => {
    let valid = true;
    let errMsg = "";
    if (!Exp) {
      valid = valid && false;
      errMsg += " Дата окончания не верна;";
    }

    if (Cvv.length !== 3) {
      valid = valid && false;
      errMsg += " CVV должен содержать 3 цифры;";
    }

    if (CardId.length !== 19) {
      valid = valid && false;
      errMsg += " Номер карты не верен;";
    }

    if (HolderName.length < 3 || !HolderName.includes(" ")) {
      valid = valid && false;
      errMsg += " Имя не заполнено или не верно;";
    }

    setValidErr(errMsg);
    return valid;
  };

  const submitProfile = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (props.verified) setNeedNotifie("false");
    else setNeedNotifie("true");

    let expVal = Exp.getMonth() + 1 + "/" + (Exp.getFullYear() - 2000);

    let profile = new ProfileData(CardId, expVal, Cvv, HolderName);
    props.doSaveProfile(profile);
  };

  const setCardNumber = (e) => {
    let cardCode = e.target.value.replace(/[^\d]/g, "").substring(0, 16);

    cardCode = cardCode !== "" ? cardCode.match(/.{1,4}/g).join(" ") : "";

    setCardId(cardCode);
  };

  const setCardCvv = (e) => {
    setCvv(e.target.value.replace(/[^\d]/g, "").substring(0, 3));
  };

  const mainPage = () => (
    <>
      <div className={css.ProfileWnd}>
        {allertDanger(validErr)}
        {allertDanger(props.error)}
        <form onSubmit={submitProfile}>
          <div className={css.ProfileForm}>
            <div className={css.CardNumBlock}>
              <Input
                value={CardId}
                name="CardNumber"
                label="Номер на карте"
                className={css.CardNumInput}
                pattern="[0-9]{13,19}"
                maxLength="19"
                placeholder="xxxx xxxx xxxx xxxx"
                onChange={setCardNumber}
              ></Input>
            </div>
            <div className={css.AdditionalDataBlock}>
              <div className={`row ${css.datePicker}`}>
                <DatePicker
                  autoOk
                  variant="inline"
                  className={css.DateBlock}
                  openTo="month"
                  views={["year", "month"]}
                  minDate={new Date()}
                  placeholder="mm/YY"
                  helperText=""
                  format="MM/yy"
                  value={Exp}
                  onChange={(e) => {
                    setExp(e);
                    console.log(e);
                  }}
                />

                <Input
                  value={Cvv}
                  className={css.CvvBlock}
                  maxLength="3"
                  label="CVV"
                  placeholder="CVV/CV2"
                  onChange={setCardCvv}
                />
              </div>
            </div>
            <div className="FioBlock">
              <Input
                value={HolderName}
                placeholder="имя на карты"
                className={css.CardNumInput}
                label="Имя на карте"
                onChange={(e) => {
                  setHolderName(e.target.value);
                }}
              />
            </div>
            <div className={css.SubmitBlock}>
              <AnimButton type="submit" variant="contained" color="secondary">
                Применть
              </AnimButton>
            </div>
          </div>
        </form>
      </div>
    </>
  );

  const notifiPage = () => (
    <>
      <div className={css.ProfileWnd}>
        <form
          onSubmit={() => {
            props.history.push("/");
          }}
        >
          <div className={css.ProfileForm}>
            <div className={css.notifier}>Данные карты успешно добавлены</div>
            <div className={css.notifierButton}>
              <Link to="/">
                <Button type="submit" variant="contained" color="secondary">
                  Перейти к такси
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
  if (props.isSaveResult) {
    if (needNotifie === "true") return notifiPage();
    props.doFlushNotifie();
    return <Redirect to="/" />;
  }

  return mainPage();
}

ProfilePage.propTypes = {
  cardNum: PropTypes.string.isRequired,
  holderName: PropTypes.string.isRequired,
  expDate: PropTypes.shape.isRequired,
  cvv: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
  error: PropTypes.string,
  isSaveResult: PropTypes.bool,
  doSaveProfile: PropTypes.func.isRequired,
  doFlushNotifie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cardNum: state.profile.profile.CardId,
  holderName: state.profile.profile.HolderName,
  expDate: expDateFormated(state),
  cvv: state.profile.profile.Cvv,
  verified: state.profile.profile.verified,
  error: expProfileError(state),
  isSaveResult: state.profile.isSaveResult,
});

const mapDispatchToProps = { doSaveProfile, doFlushNotifie };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfilePage));
