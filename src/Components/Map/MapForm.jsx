import React from "react";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RouteForm from "./RouteForm";

import { doLoadRoute } from "./../../Services/StoreLogic/Navigation";

import css from "./../../css/Main.module.css";
import { useState, useRef } from "react";
import { useIntl } from "react-intl";

const MapForm = (props) => {
  const [taxiCalled, setTaxiCalled] = useState(false);
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  const intl = useIntl();

  const intlMsg = (props) => {
    return intl.formatMessage({ id: props });
  };

  const drawRoute = (map, coordinates) => {
    const sourceObject = map.getSource("route");

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
  };

  React.useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZmFuZ2FyaDY2NiIsImEiOiJjazhwc21mM3YwMWc1M2xwajYwZjFhejlnIn0.-t2babwIvcVtwALeMcKvtw";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [30.233319, 59.942138],
        zoom: 13,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  const recall = (called) => setTaxiCalled(called);

  if (props.routExists && map) {
    drawRoute(map, props.currentRout);
  }
  return (
    <>
      <RouteForm
        verified={props.verified}
        error={props.error}
        pError={props.pError}
        doLoadRoute={props.doLoadRoute}
        avaliablePoints={props.avaliablePoints}
        recallTaxi={(called) => setTaxiCalled(called)}
        taxiCalled={taxiCalled}
      />
      <div ref={(el) => (mapContainer.current = el)} className={css.mapStyle} />
    </>
  );
};

MapForm.propTypes = {
  routExists: PropTypes.bool.isRequired,
  currentRout: PropTypes.array,
};

const mapStateToProps = (state) => ({
  routExists: state.rout.routExists,
  currentRout: state.rout.currentRout,
  error: state.rout.error,
  pError: state.profile.error,
  verified: state.profile.profile.verified,
  avaliablePoints: state.rout.avaliablePoints,
});

const mapDispatchToProps = { doLoadRoute };

export default connect(mapStateToProps, mapDispatchToProps)(MapForm);
