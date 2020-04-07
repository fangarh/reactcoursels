import React from "react";
import RouteForm from "./RouteForm";
import mapboxgl from "mapbox-gl";
import NavigationActions from "../NavigationActions";
import "./Main.css";
import PropTypes from "prop-types";

class MapForm extends React.Component {
  static propTypes = {
    controllActions: PropTypes.func,
  };

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZmFuZ2FyaDY2NiIsImEiOiJjazhwc21mM3YwMWc1M2xwajYwZjFhejlnIn0.-t2babwIvcVtwALeMcKvtw";
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
    });
  }

  componentWillUnmount() {
    // this.map.remove();
  }

  render() {
    const style = {
      position: "auto",
      top: 0,
      bottom: 0,
      width: "100%",
      height: "85vh",
    };

    return (
      <>
        <RouteForm
          fillProfile={() => {
            this.props.controllActions(NavigationActions["ProfileForm"]);
          }}
        />
        <div style={style} ref={(el) => (this.mapContainer = el)} />
      </>
    );
  }
}

export default MapForm;
