import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

const PrivateRoute = ({
  component: RouteComponent,
  loginPath,
  loggedOn,
  ...rest
}) => {
  console.log(loggedOn);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        loggedOn ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={loginPath} />
        )
      }
    />
  );
};
/*  (
    
  );*/
const mapStateToProps = (state) => ({
  loggedOn: state.auth.loggedOn,
});

//const PrivateRoute = compose(, PrivRout);

export default connect(mapStateToProps, null)(PrivateRoute);
