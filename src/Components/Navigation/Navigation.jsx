import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import { doLogoff } from "../../Services/StoreLogic/Authorization/actions";

import "./../../css/Navigation.css";

class NavigationMenu extends React.Component {
  menuItemClick = (e) => {
    this.props.doLogoff();
  };

  render() {
    return (
      <nav className="menuNav">
        <ul className="topmenu">
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
            <label onClick={this.menuItemClick}>Выход</label>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapDispatchToProps = { doLogoff };

export default connect(null, mapDispatchToProps)(NavigationMenu);
