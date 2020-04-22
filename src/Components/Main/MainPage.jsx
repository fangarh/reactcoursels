import React from "react";
import { connect } from "react-redux";

import NavigationMenu from "../Navigation/Navigation";
import MapForm from "../Map/MapForm";

import { doLoadProfile } from "./../../Services/StoreLogic/Profile/actions";
import { doFlushAutoLogon } from "./../../Services/StoreLogic/Authorization/actions";
import { doLoadRoutesList } from "./../../Services/StoreLogic/Navigation";

import "./../../css/Profile.css";

function MainPage(props) {
  if (props.autoLogOn) {
    props.doLoadProfile();
    props.doFlushAutoLogon();
    props.doLoadRoutesList();
  }

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

const mapStateToProps = (state) => ({
  autoLogOn: state.auth.autoLogOn,
});

const mapDispatchToProps = {
  doLoadProfile,
  doFlushAutoLogon,
  doLoadRoutesList,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
