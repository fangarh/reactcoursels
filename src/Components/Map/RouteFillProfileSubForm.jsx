import React from "react";
import "./../../css/Main.css";
import PropTypes from "prop-types";
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

RouteFillProfileSubForm.propTypes = {
  fillProfile: PropTypes.func.isRequired,
};

export default RouteFillProfileSubForm;
