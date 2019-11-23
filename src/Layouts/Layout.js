import React, { useEffect } from "react";
import Home from "../Screens/Home/Home";
import Detail from "../Screens/Detail/Detail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookingScreen from "../Screens/BookingScreen/BookingScreen";
import SeatingScreen from "../Screens/SeatingScreen/SeatingScreen";
import SignupScreen from "../Screens/Authentication/SignupScreen/SignupScreen";
import { Demo } from "../demos/Demo";
import SigninScreen from "../Screens/Authentication/SigninScreen/SigninScreen";
import { restConnector } from "../Services";
import { connect, useDispatch } from "react-redux";
import { actSignin } from "../Redux/Actions/User";
import Auth from "../HOC/Auth";
import AdminScreen from "../Screens/Admin/AdminScreen";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let user = localStorage.getItem("userSignin");
    if (user) {
      const userObj = JSON.parse(user);
      restConnector.defaults.headers["Authorization"] = userObj.accessToken;
      dispatch(actSignin(userObj));
    }
  }, [dispatch]);

  return (
    // <Demo />

    <BrowserRouter>
      <Switch>
        <Route path="/detail/:filmId" component={Detail} />
        <Route path="/booking" component={BookingScreen} />
        <Route path="/chosenshow/:filmId" component={BookingScreen} />
        <Auth path="/seating/:showId" component={SeatingScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/admin" component={AdminScreen} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default connect()(Layout);
