import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";

import NavigationMenu from "../Navigation/Navigation";
import MapForm from "../Map/MapForm";
import PrivateRoute from "../Auth/PrivateRout";

import { doLoadProfile } from "./../../Services/StoreLogic/Profile/actions";
import { doFlushAutoLogon } from "./../../Services/StoreLogic/Authorization/actions";
import { doLoadRoutesList } from "./../../Services/StoreLogic/Navigation";
import { doLogoff } from "../../Services/StoreLogic/Authorization/actions";

import ProfilePage from "../Profile/ProfilePage";

function MainPage(props) {
  if (props.autoLogOn) {
    props.doLoadProfile();
    props.doFlushAutoLogon();
    props.doLoadRoutesList();
  }

  const buildFormDOM = () => {
    return (
      <div>
        <NavigationMenu doLogOff={props.doLogoff} />
        <Switch>
          <PrivateRoute path="/" component={MapForm} exact />
          <PrivateRoute path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    );
  };

  return <>{buildFormDOM()}</>;
}

MainPage.propTypes = {
  autoLogOn: PropTypes.bool,
  doLoadProfile: PropTypes.func.isRequired,
  doFlushAutoLogon: PropTypes.func.isRequired,
  doLoadRoutesList: PropTypes.func.isRequired,
  doLogoff: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  autoLogOn: state.auth.autoLogOn,
  error: state.anim.error,
});

const mapDispatchToProps = {
  doLoadProfile,
  doFlushAutoLogon,
  doLoadRoutesList,
  doLogoff,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
