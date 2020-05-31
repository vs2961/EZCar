import React, { Component } from "react";
import CarAppBar from "../homepage/CarAppBar";
import Car from "./Car";
import Grid from "@material-ui/core/Grid";
import FilterDrawer from "./FilterDrawer";
import Slider from "@material-ui/core/Slider";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
class ResultPage extends React.PureComponent {
	constructor(props) {
		super(props);
		// checks to see if user enters page without going through filtering
		// console.log(this.props.location.state)
		if (typeof this.props.location.state === "undefined") console.log("404");
		else {
			this.sortedPrices = this.props.location.state.sortedPrices;
			this.sortedRatings = this.props.location.state.sortedRatings;
			this.sortedMpg = this.props.location.state.sortedMpg;
			console.log(this.sortedRatings)
			console.log(this.sortedMpg)
		}
		

		this.state = {
			currentFilter: this.sortedPrices,
			booga: "booga"
		};

		// console.log(this.sortedPrices);
		const filterRange = [
			{
				value: 0,
				label: `MIN VALUE: 0`,
			},
			{
				value: 50,
				label: `MIN VALUE: 10000`,
			},
		];

		this.updateFilter = this.updateFilter.bind(this)
		this.actualUpdate = this.actualUpdate.bind(this)
	}

	updateFilter = (chosenFilter) => {
		const values = {
			"MSRP": this.sortedPrices,
			"RATING": this.sortedRatings,
			"MPG": this.sortedMpg
		}
		const choosen = values[chosenFilter]
		this.setState({
			currentFilter: choosen,
			booga: "bdsfdsf"
		});
	};

	actualUpdate = () => {
		this.setState({
			booga: "oompga"
		})
	}

	render() {
		if (typeof this.props.location.state === "undefined") return <p>404</p>;
		return (
			<div>
				<CarAppBar/>
				<h1>Here Is What We Found</h1>
				<Button onClick={this.actualUpdate}>{this.state.booga}</Button>
				<FilterDrawer func={this.updateFilter}/>
				{this.state.currentFilter[0].HORSEPOWER}
				<Grid container>
					{/* maps each car onto the page */}
					{console.log(this.state.currentFilter)}
					{Object.entries(this.state.currentFilter).map(([key, value]) => {
						return (
							<Grid item xs={12} key={key}>
								<Car
									ranking={this.sortedRatings}
									name={value.NAME}
									data={value}
								/>
							</Grid>
						);
					})}
				</Grid>
			</div>
		);
	}
}

export default ResultPage;
