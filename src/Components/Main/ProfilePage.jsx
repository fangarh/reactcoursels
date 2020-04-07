import React from "react";
import { AuthContext } from "../Services/AuthProvider";
import ProfileData from "../BuisnessObjects/ProfileData";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

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
              <Input
                value={CardId}
                placeholder="номер карты"
                onChange={(e) => {
                  setCardId(e.target.value);
                }}
              ></Input>
              <Input
                value={Month}
                placeholder="месяц"
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
              />
              <Input
                value={Year}
                placeholder="год"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
              <Input
                value={HolderName}
                placeholder="имя на карты"
                onChange={(e) => {
                  setHolderName(e.target.value);
                }}
              />
              <Button type="submit" variant="contained" color="secondary">
                Применть
              </Button>
            </form>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default ProfilePage;
