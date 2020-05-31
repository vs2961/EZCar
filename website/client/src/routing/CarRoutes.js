
import React from "react";
import {Router, Switch, Route} from 'react-router-dom';
import Welcome from "../homepage/Welcome";
import About from "../homepage/About";
import CarAppBar from "../homepage/CarAppBar";
import CarDump from "../homepage/CarDump";
import ResultPage from '../results/ResultPage'
import history from './history'
// Describes the routes of the website. 
function CarRoutes() {
    return(
        <Router history={history}>
            <Switch>
                <Route path={"/"} exact component={Welcome}>
                </Route>
                <Route path={"/about"} component={About} exact>
                    <CarAppBar/>
                    <About/>
                </Route>
                <Route path={"/cars"} component={CarDump} exact/>
                <Route path="/results" exact component={ResultPage}/>
                <Route path="/" component={Welcome}/>
            </Switch>
        </Router>
    )
}

export default CarRoutes;
