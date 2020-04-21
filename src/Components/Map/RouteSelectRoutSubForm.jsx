import React from "react";
import TextField from "@material-ui/core/TextField";
import "./../../css/Main.css";

function RouteSelectedRoutSubForm(props) {
  return (
    <div className="RouteForm">
      <TextField
        id="address-1"
        name="address1"
        select
        margin="normal"
        label="Пункт отправления"
        fullWidth
      ></TextField>
    </div>
  );
}

export default RouteSelectedRoutSubForm;
