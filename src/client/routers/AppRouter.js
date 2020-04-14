import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import HomePage from "../components/Pages/HomePage";
import OrganizeTables from "../components/Pages/OrganizeTables";

const AppRouter = () => (
    <Router>
        <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/organize" component={OrganizeTables} exact={true} />
        </Switch>
    </Router>
);

export default AppRouter;
