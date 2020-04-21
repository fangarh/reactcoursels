import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: RouteComponent,
  loginPath,
  loggedOn,
  ...rest
}) => {
  if (!loginPath) loginPath = "/logon";

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

const mapStateToProps = (state) => ({
  loggedOn: state.auth.loggedOn,
});

export default connect(mapStateToProps, null)(PrivateRoute);
