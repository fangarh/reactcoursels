import React from "react";
import { AuthContext } from "../Auth/AuthProvider";
import ProfileData from "../../BuisnessObjects/ProfileData";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import "./../../css/Profile.css";
function ProfilePage(props) {
  const cont = React.useContext(AuthContext);

  const [CardId, setCardId] = React.useState("");
  const [HolderName, setHolderName] = React.useState("");
  const [Year, setYear] = React.useState("");
  const [Month, setMonth] = React.useState("");

  return (
    <>
      <div className="ProfileWnd">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let profile = new ProfileData(CardId, Month, Year, HolderName);

            cont.updateProfile(profile);
          }}
        >
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
                placeholder="месяц"
                className="MonthBlock"
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
              />
              <Input
                value={Year}
                className="YearBlock"
                placeholder="год"
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
              <Button type="submit" variant="contained" color="secondary">
                Применть
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfilePage;
