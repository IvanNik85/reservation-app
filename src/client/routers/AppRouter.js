import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from "../components/HomePage";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
    </Switch>
  </Router>
);

export default AppRouter;
