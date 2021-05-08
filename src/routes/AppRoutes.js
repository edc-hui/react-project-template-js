import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./"
const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    )
}

export default AppRoute;