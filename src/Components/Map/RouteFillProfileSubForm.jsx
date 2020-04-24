import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { allertDanger } from "../allertDanger";

import css from "./../../css/Main.module.css";

function RouteFillProfileSubForm(props) {
  return (
    <>
      <div className={css.RouteForm}>
        <div className={css.RoutFormForRedirect}>
          <p>Необходимо заполнить все данные профиля</p>
          <div className={css.RoutButtonDiv}>
            <Link to="/profile">
              <Button type="button" variant="contained" color="secondary">
                Редактировать профиль
              </Button>
            </Link>
          </div>
        </div>
        <div className={css.topPaddingMemo}>
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
