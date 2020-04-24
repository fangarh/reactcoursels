import React from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";

import css from "./../../css/Navigation.module.css";

function NavigationMenu(props) {
  const menuItemClick = (e) => {
    props.doLogOff();
  };

  return (
    <nav className={css.menuNav}>
      <ul className={css.topmenu}>
        <li>
          {" "}
          <label>
            <Link to="/">Карта</Link>
          </label>
        </li>
        <li>
          <label>
            <NavLink to="/profile">Профиль</NavLink>
          </label>
        </li>
        <li>
          <label onClick={menuItemClick}>Выход</label>
        </li>
      </ul>
    </nav>
  );
}

NavigationMenu.propTypes = {
  doLogOff: PropTypes.func.isRequired,
};

export default NavigationMenu;
