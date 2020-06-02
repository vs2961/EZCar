import React from "react";
import CarAppBar from "../homepage/CarAppBar";
import Car from "./Car";
import Grid from "@material-ui/core/Grid";
import FilterDrawer from "./FilterDrawer";
import { Button } from "@material-ui/core";
import { Cookies } from 'react-cookie'
import axios from 'axios'

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
		}

		this.state = {
			currentFilter: this.sortedPrices,
			upperPrice: this.sortedPrices[0].MSRP || 2,
			compareAmnt: 0,

		};

		this.updateFilter = this.updateFilter.bind(this);
		this.addCar = this.addCar.bind(this);
		this.choices = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title: "Result Page Data" }),
		};
	}

	updateFilter = (chosenFilter, maxPrice) => {
		const values = {
			MSRP: this.sortedPrices,
			RATING: this.sortedRatings,
			MPG: this.sortedMpg,
		};
		console.log(chosenFilter);
		const choosen = values[chosenFilter];
		console.log(choosen);
		this.setState({
			currentFilter: choosen,
			upperPrice: maxPrice,
		});
	};

	addCar = (val) => {
		const cookies = new Cookies()
		axios.post("/add_car", {
			id: cookies.get('id'),
			car_id: val
		})
	}
	render() {
		if (typeof this.props.location.state === "undefined") return <p>404</p>;
		return (
			<div>
				<CarAppBar />
				<h1>Here Is What We Found</h1>
				<FilterDrawer
					func={this.updateFilter}
					maxAvailPrice={this.sortedPrices[0].MSRP}
				/>
				<Grid container>
					{/* maps each car onto the page */}

					{Object.entries(this.state.currentFilter).map(([key, value]) => {
						if (value.MSRP <= this.state.upperPrice)
						return (
							<Grid item xs={12} key={key}>
								<Car
									ranking={this.sortedRatings}
									name={value.NAME}
									data={value}
									func={this.addCar}
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
