import React from "react";
import "./Navigation.css";
import NavigationActions from "../NavigationActions";
import PropTypes from "prop-types";

class NavigationMenu extends React.Component {
  static propTypes = {
    controllActions: PropTypes.func,
  };

  menuItemClick = (e) => {
    switch (e.target.id) {
      case "map":
        this.props.controllActions(NavigationActions["TaxiForm"]);
        break;
      case "profile":
        this.props.controllActions(NavigationActions["ProfileForm"]);
        break;
      case "exit":
        this.props.controllActions(NavigationActions["LogonForm"]);
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <>
        <nav className="menuNav">
          <ul className="topmenu">
            <li></li>
            <li>
              <label id="map" onClick={this.menuItemClick}>
                Карта
              </label>
            </li>
            <li>
              <label id="profile" onClick={this.menuItemClick}>
                Профиль
              </label>
            </li>
            <li>
              <label id="exit" onClick={this.menuItemClick}>
                Выйти
              </label>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default NavigationMenu;
