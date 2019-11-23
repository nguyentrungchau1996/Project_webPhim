import React from "react";
import { Route, Redirect } from "react-router-dom";

//Component như là alias (bí danh) cho component
const Auth = ({ path, component: Component }) => {
  return (
    <Route
      path={path}
      render={routeProps => {
        if (localStorage.getItem("userSignin")) {
          return <Component {...routeProps} />;
        }
        alert("Login please");
        return <Redirect to="/signin" />;
      }}
    />
  );
};

export default Auth;
