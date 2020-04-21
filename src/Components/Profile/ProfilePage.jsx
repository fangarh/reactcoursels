import React from "react";

import ProfileData from "../../BuisnessObjects/ProfileData";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import NavigationMenu from "./../Navigation/Navigation";
import "./../../css/Profile.css";
import composedAnimated from "./../HOCWrappers/AnimateWait";

const AnimButton = composedAnimated(Button);

function ProfilePage(props) {
  const [CardId, setCardId] = React.useState("");
  const [HolderName, setHolderName] = React.useState("");
  const [Year, setYear] = React.useState("");
  const [Month, setMonth] = React.useState("");

  const submitProfile = (e) => {
    e.preventDefault();
    let profile = new ProfileData(CardId, Month, Year, HolderName);
  };

  return (
    <>
      <NavigationMenu />
      <div className="ProfileWnd">
        <form onSubmit={submitProfile}>
          <div className="ProfileForm">
            <div className="CardNumBlock">
              <Input
                value={CardId}
                className="CardNumInput"
                pattern="[0-9\s]{13,19}"
                autocomplete="cc-number"
                maxlength="19"
                placeholder="xxxx xxxx xxxx xxxx"
                onChange={(e) => {
                  setCardId(e.target.value);
                }}
              ></Input>
            </div>
            <div className="AdditionalDataBlock">
              <Input
                value={Month}
                placeholder="месяц/год"
                className="MonthBlock"
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
              />
              <Input
                value={Year}
                className="YearBlock"
                placeholder="CVV/CV2"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
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
}

export default ProfilePage;
