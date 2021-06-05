import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App"
import Station from "./Station"

const Router = () => {
return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/station/:id" component={Station} />
        </Switch>
    </BrowserRouter>)
}

export default Router