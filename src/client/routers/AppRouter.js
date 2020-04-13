import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import HomePage from "../components/HomePage";
import OrganizeTables from "../components/OrganizeTables";

const AppRouter = () => (
    <Router>
        <Switch>
            {/* <Route path="/" component={HomePage} exact={true} /> */}
            <Route path="/" component={OrganizeTables} exact={true} />
        </Switch>
    </Router>
);

export default AppRouter;
