import React, { useState } from "react";
import { connect } from "react-redux";

import { doLoadRoute } from "./../../Services/Reducer/Navigation";
import { allertDanger } from "../allertDanger";
import composedAnimated from "./../HOCWrappers/AnimateWait";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

import "./../../css/Main.css";

const AnimButton = composedAnimated(Button);

function RouteSelectedRoutSubForm(props) {
  const [addr1, setAddr1] = useState("");
  const [error, setError] = useState("");
  const [addr2, setAddr2] = useState("");

  const doSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!addr1 || !addr2) {
      setError("Маршрут выбран не полностью.");
      return;
    }

    if (addr1 === addr2) {
      setError("Точка отправления не может совпадать с точкой прибытия.");
      return;
    }

    let rout = { address1: addr1, address2: addr2 };

    props.doLoadRoute(rout);
  };

  return (
    <>
      <div className="RouteForm">
        <form onSubmit={doSubmit}>
          <div className="RoutInputDiv">
            <TextField
              id="address-1"
              name="address1"
              select
              margin="normal"
              label="Пункт отправления"
              value={addr1}
              onChange={(e) => {
                setAddr1(e.target.value);
                setError("");
              }}
              fullWidth
            >
              <MenuItem value="">Пункт отправления</MenuItem>
              {props.avaliablePoints.map((point) => (
                <MenuItem key={point} value={point}>
                  {point}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="RoutInputDiv">
            <TextField
              id="address-2"
              name="address2"
              select
              margin="normal"
              label="Пункт прибытия"
              value={addr2}
              onChange={(e) => {
                setAddr2(e.target.value);
                setError("");
              }}
              fullWidth
            >
              <MenuItem value="">Пункт прибытия</MenuItem>
              {props.avaliablePoints.map((point) => (
                <MenuItem key={point} value={point}>
                  {point}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="RoutButtonDiv">
            <AnimButton type="submit" variant="contained" color="secondary">
              Вызвать такси
            </AnimButton>
          </div>
        </form>
        {allertDanger(error)}
        {allertDanger(props.error)}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  avaliablePoints: state.rout.avaliablePoints,
  error: state.rout.error,
});

const mapDispatchToProps = { doLoadRoute };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteSelectedRoutSubForm);
