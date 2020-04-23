import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { allertDanger } from "../allertDanger";

import "./../../css/Main.css";

function RouteFillProfileSubForm(props) {
  const buttonDiv = {
    alignItems: "center",
    marginTop: "30px",
  };

  const style = {
    paddingTop: "30px",
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
        <div style={style}>
          {allertDanger(props.error)}
          {allertDanger(props.pError)}
        </div>
      </div>
    </>
  );
}

RouteFillProfileSubForm.propTypes = {
  error: PropTypes.string,
  pError: PropTypes.string,
};

const mapStateToProps = (state) => ({
  error: state.rout.error,
  pError: state.profile.error,
});

export default connect(mapStateToProps, null)(RouteFillProfileSubForm);
