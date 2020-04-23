import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

MainPage.propTypes = {
  autoLogOn: PropTypes.bool,
  doLoadProfile: PropTypes.func.isRequired,
  doFlushAutoLogon: PropTypes.func.isRequired,
  doLoadRoutesList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  autoLogOn: state.auth.autoLogOn,
});

const mapDispatchToProps = {
  doLoadProfile,
  doFlushAutoLogon,
  doLoadRoutesList,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
