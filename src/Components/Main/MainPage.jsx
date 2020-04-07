import React from "react";
import NavigationMenu from "./Navigation";
import NavigationActions from "../NavigationActions";
import ProfilePage from "./ProfilePage";
import MapForm from "./MapForm";

import { AuthContext } from "../Services/AuthProvider";

function MainPage(props) {
  const [activePage, setActivePage] = React.useState(
    NavigationActions["TaxiForm"]
  );

  const cont = React.useContext(AuthContext);

  const buildFormDOM = () => {
    return (
      <>
        <NavigationMenu controllActions={navigatorActions} />
        <div>
          {activePage === NavigationActions["ProfileForm"] ? (
            <ProfilePage controllActions={navigatorActions} />
          ) : (
            <MapForm controllActions={navigatorActions} />
          )}
        </div>
      </>
    );
  };

  const navigatorActions = (navigateActions) => {
    // TODO: send navigate message to parent form
    if (
      navigateActions !== NavigationActions["TaxiForm"] &&
      navigateActions !== NavigationActions["ProfileForm"]
    )
      cont.logout();
    else setActivePage(navigateActions);
  };

  return <>{buildFormDOM()}</>;
}

export default MainPage;
