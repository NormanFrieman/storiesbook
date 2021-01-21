import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import MainScreen from "./pages/MainScreen";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Login } />
                <Route path="/register" component={ Register } />
                <Route path="/feed" component={ MainScreen } />
            </Switch>
        </BrowserRouter>
    );
}