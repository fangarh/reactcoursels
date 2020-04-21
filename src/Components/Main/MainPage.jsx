import React from "react";
import NavigationMenu from "../Navigation/Navigation";

import MapForm from "../Map/MapForm";
import "./../../css/Profile.css";

function MainPage(props) {
  const buildFormDOM = () => {
    return (
      <>
        <div>
          <NavigationMenu />
          <div>
            <MapForm />
          </div>
        </div>
      </>
    );
  };

  return <>{buildFormDOM()}</>;
}

export default MainPage;
