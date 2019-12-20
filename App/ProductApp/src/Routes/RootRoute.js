import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppContainer from "../Containers/AppContainer";

const RootRoute = () => (
  <Router>
    <Switch>
      <Route component={AppContainer} />
    </Switch>
  </Router>
);

export default RootRoute;
