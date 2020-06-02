import React from "react";
import CarAppBar from "./CarAppBar";
import Grid from "@material-ui/core/Grid";
import NewCard from "../cards/NewCard";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Cookies } from 'react-cookie'
// import { ThemeProvider } from '@material-ui/core';
import history from "../routing/history";

class Welcome extends React.PureComponent {
	constructor(props) {
		const cookie = new Cookies()
		console.log(cookie.get("id"));
		super(props);
		this.rounds = [
				["Price", "Newcomer", [0, 30000]],
				["Price", "Family Package", [30001, 45000]],
				["Price", "Exclusive", [45001, Number.MAX_SAFE_INTEGER]],

				["Type", "Convertible", "convertible"],
				["Type", "SUV", "suv"],
				["Type", "Sports", "sports"],

				["Seats", "Less Than 3", [0, 3]],
				["Seats", "Less Than 5", [4, 5]],
				["Seats", "More Than 5", [5, "unlimited"]],
		];
		this.state = {
			curIndex: 0,
            avails: [true, true, true, true, true, true, true, true, true],
            currentFilter: "MSRP"
        };

		this.choices = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title: "User's Choices" }),
			Price: null,
			Type: null,
			Seats: null,
			futureRound: this.rounds[1],
			sort_by: this.state.currentFilter
		};

		this.updateChoices = this.updateChoices.bind(this);
		this.submitData = this.submitData.bind(this);
		this.carImage = this.carImage.bind(this);
		this.generateRankings = this.generateRankings.bind(this);
	}

	updateChoices(val) {
		var updatedIndex;
		if (this.state.curIndex >= this.rounds.length - 1)
			updatedIndex = this.rounds.length - 1;
		else updatedIndex = this.state.curIndex + 1;
		this.setState({
			curIndex: updatedIndex
		});

		this.choices[val[0]] = val[2];
		this.choices["futureRound"] = this.rounds[updatedIndex];
		axios.post("/available", this.choices).then((res) => {
			var newArray = [];
			for (var i = 0; i < res.data.length; i++) {
				newArray[i] = res.data[i];
			}
			this.setState({
				avails: newArray,
			});
		});
	}
	generateRankings = (filter) => {
        const obj1 = {sort_by: filter}
        return {...this.choices, ...obj1}
	};

	// currently in debug mode. When user is done selecting their choices, the callback fxn submitData will be auto-called
	submitData = () => {
        const getPrices = axios.post("/dump_sorted", this.generateRankings("MSRP"));
		const getRatings = axios.post(
			"/dump_sorted",
			this.generateRankings("RATING")
        );
		const getEfficencies = axios.post(
			"/dump_sorted",
			this.generateRankings("MPG")
		);
		axios.all([getPrices, getRatings, getEfficencies]).then(
			axios.spread((...responses) => {
				const prices = responses[0].data;
				const ratings = responses[1].data;
                const efficiencies = responses[2].data;
				history.push({
					pathname: "/results",
					state: {
						sortedPrices: prices,
						sortedRatings: ratings,
						sortedMpg: efficiencies,
					},
				});
			})
		);
	};

	carImage(index) {
		const carPics = [
			"newcomer.png", "family.png", "exclusive.png",
			"convertible.png", "suv.png", "sports.png",
			"bronze.jpg", "bronze.jpg", "bronze.jpg"
		];
		return carPics[index];
	}

	render() {
		return (
			<>
				<CarAppBar />
				<Grid container>
					{this.rounds.map((item, index) => {
						return (
							this.state.avails[index] && (
								<Grid item xs={4} key={index}>
									<NewCard
										val={item}
										func={this.updateChoices}
										text={item[1]}
										imgName={this.carImage(index)}
									/>
								</Grid>
							)
						);
					})}
				</Grid>
				<Button onClick={this.submitData}>Submit Data</Button>
				Here is what we found. . .
			</>
		);
	}
}

export default Welcome;
