import React from "react";
import { Route, Redirect } from "react-router-dom";

const Auth = ({
  component: Component,
  authenticated,
}) => {
  return (
    <Route
      render={props =>
        authenticated === true ? (
          <Component {...props} />,
          console.log('true')
        ) : (
            <Redirect to="/signin" />,
            console.log('false')
          )
      }
    />
  );
}

export default Auth;