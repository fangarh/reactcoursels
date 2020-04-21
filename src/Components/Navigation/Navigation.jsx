import React from "react";
import { connect } from "react-redux";
import "./../../css/Navigation.css";
import { doLogoff } from "./../../Services/Authorization/actions";
import { NavLink, Link } from "react-router-dom";

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
