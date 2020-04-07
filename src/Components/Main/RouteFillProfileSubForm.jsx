import React from "react";
import "./Main.css";

import Button from "@material-ui/core/Button";

function RouteFillProfileSubForm(props) {
  const goToFillForm = (e) => {
    props.fillProfile();
  };

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
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={goToFillForm}
            >
              Редактировать профиль
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RouteFillProfileSubForm;
