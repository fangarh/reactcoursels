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
import { setCurLocal, nextLocal } from "../../Services/StoreLogic/Local";

import ProfilePage from "../Profile/ProfilePage";
import css from "./../../css/Main.module.css";

function MainPage(props) {
  if (props.autoLogOn) {
    props.doLoadProfile();
    props.doFlushAutoLogon();
    props.doLoadRoutesList();
  }

  const localeChange = (e) => {
    props.nextLocal();
  };

  const buildFormDOM = () => {
    return (
      <div className={css.mainLayout}>
        <NavigationMenu
          doLogOff={props.doLogoff}
          setLocal={props.setCurLocal}
          local={props.local}
          nextLocale={props.nextLocale}
          localeChange={localeChange}
        />
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
  setCurLocal: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  autoLogOn: state.auth.autoLogOn,
  error: state.anim.error,
  local: state.locale.curLocal,
  nextLocale: state.locale.nextLocaleName,
});

const mapDispatchToProps = {
  setCurLocal,
  doLoadProfile,
  doFlushAutoLogon,
  doLoadRoutesList,
  doLogoff,
  nextLocal,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
