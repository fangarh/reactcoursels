import React from "react";

import ProfileData from "../../BuisnessObjects/ProfileData";
import { Link } from "react-router-dom";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import NavigationMenu from "./../Navigation/Navigation";
import "./../../css/Profile.css";
import composedAnimated from "./../HOCWrappers/AnimateWait";
import { connect } from "react-redux";
import {
  doSaveProfile,
  doFlushNotifie,
} from "./../../Services/Profile/actions";
import { expDateFormated } from "./../../Services/Profile/selectors";
import { withRouter, Redirect } from "react-router-dom";
//import { DatePicker } from "material-ui-pickers";
//import DatePicker from "react-datepicker";
import { DatePicker } from "@material-ui/pickers";
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
  const [needNotifie, setNeedNotifie] = React.useState("unknown");
  console.log(new Date(Exp));
  const submitProfile = (e) => {
    e.preventDefault();

    if (props.verified) setNeedNotifie("false");
    else setNeedNotifie("true");

    let expVal = Exp.getMonth() + 1 + "/" + (Exp.getFullYear() - 2000);

    let profile = new ProfileData(CardId, expVal, Cvv, HolderName);
    props.doSaveProfile(profile);
  };

  const allertDanger = () => {
    return props.error ? (
      <>
        <div className="alert alert-danger" role="alert">
          {props.error}
        </div>
      </>
    ) : (
      <></>
    );
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
      <NavigationMenu />
      <div className="ProfileWnd">
        {allertDanger()}
        <form onSubmit={submitProfile}>
          <div className="ProfileForm">
            <div className="CardNumBlock">
              <Input
                value={CardId}
                name="CardNumber"
                className="CardNumInput"
                pattern="[0-9]{13,19}"
                maxLength="19"
                placeholder="xxxx xxxx xxxx xxxx"
                onChange={setCardNumber}
              ></Input>
            </div>
            <div className="AdditionalDataBlock">
              <div className="row datePicker">
                <DatePicker
                  autoOk
                  variant="inline"
                  className="DateBlock"
                  openTo="month"
                  views={["year", "month"]}
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
                  className="CvvBlock"
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
                className="CardNumInput"
                onChange={(e) => {
                  setHolderName(e.target.value);
                }}
              />
            </div>
            <div className="SubmitBlock">
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
      <NavigationMenu />
      <div className="ProfileWnd">
        {allertDanger()}
        <form
          onSubmit={() => {
            props.history.push("/");
          }}
        >
          <div className="ProfileForm">
            <div className="notifier">Данные карты успешно добавлены</div>
            <div className="notifierButton">
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

const mapStateToProps = (state) => ({
  cardNum: state.profile.profile.CardId,
  holderName: state.profile.profile.HolderName,
  expDate: expDateFormated(state),
  cvv: state.profile.profile.Cvv,
  verified: state.profile.profile.verified,
  error: state.profile.error,
  isSaveResult: state.profile.isSaveResult,
});

const mapDispatchToProps = { doSaveProfile, doFlushNotifie };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
);
