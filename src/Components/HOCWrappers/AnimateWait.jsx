import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";

const AnimateHOC = (Component) => (props) => {
  const loaderSpinner = (
    <div className="spinner-border text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
  const prop = { ...props, dispatch: "" };

  if (props.loading === "false") return <Component {...prop} />;
  else return loaderSpinner;
};

AnimateHOC.propTypes = {
  loading: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.anim.loading.toString(),
});

const composedAnimated = compose(connect(mapStateToProps, null), AnimateHOC);

export default composedAnimated;
