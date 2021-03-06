import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Welcome from "../homepage/Welcome";
import About from "../homepage/About";
import CarAppBar from "../homepage/CarAppBar";
import CarDump from "../homepage/CarDump";
import ResultPage from "../results/ResultPage";
import history from "./history";
import Profile from "../users/Profile";
import Login from "../users/Login";
import Register from "../users/Register";


// Describes the routes of the website.
function CarRoutes() {
	return (
		<Router history={history}>
			<Switch>
				<Route path={"/"} exact component={Welcome}></Route>
				<Route path={"/about"} component={About} exact>
					<CarAppBar />
					<About />
				</Route>

				<Route path={"/login"} exact>
					<CarAppBar/>
					<Login/>
				</Route> />
				<Route path={"/register"} exact >
					<CarAppBar/>
                    <Register/>
                </Route>
				<Route path="/results" exact component={ResultPage} />
				<Route path="/profile" exact>
					<CarAppBar/>
					<Profile/>
				</Route>
				<Route path="/" component={Welcome}>
					<Redirect to="/" />
				</Route>
			</Switch>
		</Router>
	);
}

export default CarRoutes;
