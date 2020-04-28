import React from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";

import css from "./../../css/Navigation.module.css";
import { useIntl } from "react-intl";

function NavigationMenu(props) {
  const menuItemClick = (e) => {
    props.doLogOff();
  };
  const intl = useIntl();

  const intlMsg = (props) => {
    return intl.formatMessage({ id: props });
  };

  return (
    <nav className={css.menuNav}>
      <ul className={css.topmenu}>
        <li>
          <label>
            <Link to="/">{intlMsg("nav.map")}</Link>
          </label>
        </li>
        <li>
          <label>
            <NavLink to="/profile">{intlMsg("nav.profile")}</NavLink>
          </label>
        </li>
        <li>
          <label onClick={props.localeChange}>{props.nextLocale}</label>
        </li>
        <li>
          <label onClick={menuItemClick}>{intlMsg("nav.exit")}</label>
        </li>
      </ul>
    </nav>
  );
}

NavigationMenu.propTypes = {
  doLogOff: PropTypes.func.isRequired,
};

export default NavigationMenu;
