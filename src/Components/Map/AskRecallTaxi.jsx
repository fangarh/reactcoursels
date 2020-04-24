import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import css from "./../../css/Main.module.css";

export function AskRecallTaxi(props) {
  return (
    <>
      <div className={css.RouteForm}>
        <div className={css.RoutFormForRedirect}>
          <p>Таси вызвано, ожидайте</p>
          <div className={css.RoutButtonDiv}>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => props.recallTaxi(false)}
            >
              Вызвать еще?
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

AskRecallTaxi.propTypes = {
  recallTaxi: PropTypes.func.isRequired,
};
