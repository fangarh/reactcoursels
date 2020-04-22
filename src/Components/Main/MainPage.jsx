import React from "react";
import NavigationMenu from "../Navigation/Navigation";

import MapForm from "../Map/MapForm";

import { connect } from "react-redux";
import { doLoadProfile } from "./../../Services/Profile/actions";
import { doFlushAutoLogon } from "./../../Services/Authorization/actions";
import "./../../css/Profile.css";

function MainPage(props) {
  if (props.autoLogOn) {
    props.doLoadProfile();
    props.doFlushAutoLogon();
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

const mapDispatchToProps = { doLoadProfile, doFlushAutoLogon };

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
