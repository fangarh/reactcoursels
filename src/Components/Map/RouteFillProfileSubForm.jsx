import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./../../css/Main.css";

function RouteFillProfileSubForm(props) {
  const buttonDiv = {
    alignItems: "center",
    marginTop: "30px",
  };

  return (
    <>
      <div className="RouteForm">
        <div className="RoutFormForRedirect">
          <p>Необходимо заполнить все данные профиля</p>
          <div style={buttonDiv}>
            <Link to="/profile">
              <Button type="button" variant="contained" color="secondary">
                Редактировать профиль
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RouteFillProfileSubForm;
