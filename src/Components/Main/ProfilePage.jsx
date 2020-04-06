import React from "react";
import { AuthContext } from "../Services/AuthProvider";
import ProfileData from "../BuisnessObjects/ProfileData";

function ProfilePage(props) {
  const cont = React.useContext(AuthContext);

  const [CardId, setCardId] = React.useState("");
  const [HolderName, setHolderName] = React.useState("");
  const [Year, setYear] = React.useState("");
  const [Month, setMonth] = React.useState("");

  return (
    <AuthContext.Consumer>
      {(params) => {
        return (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                let profile = new ProfileData(CardId, Month, Year, HolderName);

                cont.updateProfile(profile);
              }}
            >
              <input
                value={CardId}
                placeholder="номер карты"
                onChange={(e) => {
                  setCardId(e.target.value);
                }}
              />
              <input
                value={Month}
                placeholder="месяц"
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
              />
              <input
                value={Year}
                placeholder="год"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
              <input
                value={HolderName}
                placeholder="имя на карты"
                onChange={(e) => {
                  setHolderName(e.target.value);
                }}
              />
              <button type="submit">Применть</button>
            </form>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default ProfilePage;
