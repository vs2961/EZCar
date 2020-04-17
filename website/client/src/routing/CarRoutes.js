
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Welcome from "../homepage/Welcome";
import About from "../homepage/About";
import CarAppBar from "../homepage/CarAppBar";
import CarDump from "../homepage/CarDump";

// Describes the routes of the website. 
function CarRoutes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact>
                    <Welcome/>
                </Route>
                <Route path={"/about"} component={About} exact>
                    <CarAppBar/>
                    <About/>
                </Route>
                <Route path={"/cars"} component={CarDump} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default CarRoutes;
