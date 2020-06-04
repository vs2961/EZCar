import React from "react";
import CarAppBar from "./CarAppBar";
import Grid from "@material-ui/core/Grid";
import NewCard from "../cards/NewCard";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Cookies } from "react-cookie";
// import { ThemeProvider } from '@material-ui/core';
import history from "../routing/history";
import Alert from '@material-ui/lab/Alert';
import {Snackbar} from "@material-ui/core";

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
				["Type", "Sports", "coupe"],

				["Seats", "Less Than 3", [0, 3]],
				["Seats", "Less Than 5", [4, 5]],
				["Seats", "More Than 5", [5, "unlimited"]],
		];
		this.state = {
			selection: [],
			curIndex: 0,
			avails: {
				Newcomer: true,
				"Family Package": true,
				Exclusive: true,
				Convertible: true,
				SUV: true,
				Sports: true,
				"Less Than 3": true,
				"Less Than 5": true,
				"More Than 5": true,
			},
			currentFilter: "MSRP",
			open: false
		};

		this.choices = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title: "User's Choices" }),
			Price: [],
			Type: [],
			Seats: [],
			sort_by: this.state.currentFilter,
		};

		this.updateChoices = this.updateChoices.bind(this);
		this.submitData = this.submitData.bind(this);
		this.carImage = this.carImage.bind(this);
		this.generateRankings = this.generateRankings.bind(this);
	}

	updateChoices(val) {
		console.log(val);
		if (!this.state.selection.includes(val[1])) {
			this.setState({selection: this.state.selection.concat(val[1])})
		}
		else{
			this.setState({selection: this.state.selection.filter(x => x != val[1])})
		}
		this.setState({open: true})

		if (!this.choices[val[0]].includes(val[2])) this.choices[val[0]].push(val[2])
		else (this.choices[val[0]] = this.choices[val[0]].filter(item => item != val[2]))
		console.log(this.choices);
	}
	generateRankings = (filter) => {
		const obj1 = { sort_by: filter };
		return { ...this.choices, ...obj1 };
	};

	// currently in debug mode. When user is done selecting their choices, the callback fxn submitData will be auto-called
	submitData = () => {
		const badgePrices = axios.post("/dump_sorted", this.generateRankings("MSRP"));
		const badgeRatings = axios.post(
			"/dump_sorted",
			this.generateRankings("RATING")
		);
		const badgeEfficiencies = axios.post(
			"/dump_sorted",
			this.generateRankings("MPG")
		);

		const sPrices = axios.post("dump_by", this.generateRankings("MSRP"))
		const sRatings = axios.post("dump_by", this.generateRankings("RATING"))
		const sEfficiencies = axios.post("dump_by", this.generateRankings("MPG"))

		axios.all([badgePrices, badgeRatings, badgeEfficiencies, sPrices, sRatings, sEfficiencies]).then(
			axios.spread((...responses) => {

				const bPrices = responses[0].data;
				const bRatings = responses[1].data;
				const bEfficiencies = responses[2].data;
				const regPrices = responses[3].data;
				const regRatings = responses[4].data;
				const regMpg = responses[5].data;
				history.push({
					pathname: "/results",
					state: {
						badgePrices: bPrices,
						badgeRatings: bRatings,
						badgeMpg: bEfficiencies,
						sortedPrices: regPrices,
						sortedRatings: regRatings,
						sortedMpg: regMpg
					},
				});
			})
		);
	};

	carImage(index) {
		const carPics = [
			"newcomer.png", "family.png", "exclusive.png",
			"convertible.png", "suv.png", "sports.png",
			"lessThan3.png", "lessThan5.png", "moreThan5.png"
		];
		return carPics[index];
	}

	render() {
		console.log(this.state.selection);
		return (
			<>
				{<Snackbar open={this.state.open} autoHideDuration='1000' onClose={() => this.setState({open: false})} anchorOrigin = {{vertical: 'top', horizontal: 'center'}} ><Alert severity="success"> {
				this.state.selection.map((value, item) => value + ", ")}

		</Alert></Snackbar>}
				<CarAppBar />
				<Grid container>
					{this.rounds.map((item, index) => {
						return (
							this.state.avails[item[1]] && (
								<Grid item xs={4} key={index}>
									<NewCard
										id={index}
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
			</>
		);
	}
}

export default Welcome;
