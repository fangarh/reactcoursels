import React from "react";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RouteForm from "./RouteForm";

import "./../../css/Main.css";

class MapForm extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZmFuZ2FyaDY2NiIsImEiOiJjazhwc21mM3YwMWc1M2xwajYwZjFhejlnIn0.-t2babwIvcVtwALeMcKvtw";
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      center: [30.233319, 59.942138],
      zoom: 13,
      style: "mapbox://styles/mapbox/streets-v9",
    });
  }

  drawRoute(map, coordinates) {
    var sourceObject = map.getSource("route");

    if (sourceObject) {
      map.removeLayer("route");
      map.removeSource("route");
    }
    map.flyTo({
      center: coordinates[0],
      zoom: 15,
    });

    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 8,
      },
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: "auto",
      top: 0,
      bottom: 0,
      width: "100%",
      height: "85vh",
    };

    if (this.props.routExists && this.map) {
      this.drawRoute(this.map, this.props.currentRout);
    }

    return (
      <>
        <RouteForm />
        <div style={style} ref={(el) => (this.mapContainer = el)} />
      </>
    );
  }
}

MapForm.propTypes = {
  routExists: PropTypes.bool.isRequired,
  currentRout: PropTypes.array,
};

const mapStateToProps = (state) => ({
  routExists: state.rout.routExists,
  currentRout: state.rout.currentRout,
});

export default connect(mapStateToProps, null)(MapForm);
