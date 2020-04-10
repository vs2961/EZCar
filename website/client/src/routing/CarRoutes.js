import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Welcome from "../homepage/Welcome";
import InfoDrawer from "../homepage/InfoDrawer";
import About from "../homepage/About";
function CarRoutes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact>
                    <Welcome/>
                    <InfoDrawer/>
                </Route>

                <Route path={"/about"} component={About} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default CarRoutes;