import React from "react";
import CarAppBar from "../homepage/CarAppBar";
import Car from "./Car";
import Grid from "@material-ui/core/Grid";
import FilterDrawer from "./FilterDrawer";
import { IconButton } from "@material-ui/core";
import { Cookies } from "react-cookie";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

class ResultPage extends React.PureComponent {
	constructor(props) {
		super(props);
		// checks to see if user enters page without going through filtering
		// console.log(this.props.location.state)
		if (typeof this.props.location.state === "undefined") console.log("404");
		else {
			this.badgePrices = this.props.location.state.badgePrices;
			this.badgeRatings = this.props.location.state.badgeRatings;
			this.badgeMpg = this.props.location.state.badgeMpg;
			this.sortedPrices = this.props.location.state.sortedPrices;
			this.sortedRatings = this.props.location.state.sortedRatings;
			this.sortedMpg = this.props.location.state.sortedMpg;
		}
		console.log(this.badgePrices);

		this.state = {
			currentFilter: this.sortedPrices,
			upperPrice: this.sortedPrices[0].MSRP || 2,
			compareAmnt: 0,
			is_visible: false
		};

		this.updateFilter = this.updateFilter.bind(this);
		this.addCar = this.addCar.bind(this);
		this.toggleVisibility = this.toggleVisibility.bind(this);
		this.scrollToTop = this.scrollToTop.bind(this);
		this.choices = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title: "Result Page Data" }),
		};
		this.floatingButton = {
			position: 'fixed',
			right: '0',
			bottom: '0',
			width: '3vw',
			height: '6vh',
			marginRight: '6px'
		}
	}

	componentDidMount() {
    	var scrollComponent = this;
    	document.addEventListener("scroll", function(e) {
      	scrollComponent.toggleVisibility();
    	});
  	}

	toggleVisibility = () => {
    	if (window.pageYOffset > 300) {
      		this.setState({
        		is_visible: true
      	});
    	}
    	else {
      		this.setState({
        		is_visible: false
      	});
    	}
  	}

  	scrollToTop = () => {
		console.log("ooga")
    	window.scrollTo({
      		top: 0,
      		behavior: "smooth"
    	});
  	}

	updateFilter = (chosenFilter, maxPrice) => {
		const values = {
			MSRP: this.sortedPrices,
			RATING: this.sortedRatings,
			MPG: this.sortedMpg,
		};
		const choosen = values[chosenFilter];
		this.setState({
			currentFilter: choosen,
			upperPrice: maxPrice,
		});
	};

	addCar = (val) => {
		const cookies = new Cookies();
		console.log(cookies.get("id"));
		axios
			.post("/add_car", {
				user_id: cookies.get("id"),
				car_id: val,
			})
			.then((res) => console.log(res.data));
	};

	render() {
		if (typeof this.props.location.state === "undefined") return <p>404</p>;
		return (
			<div>
				<CarAppBar />
				<h1>Here Is What We Found</h1>
				{this.state.is_visible && <IconButton onClick = {this.scrollToTop} style = {this.floatingButton} >
					<img src="arrowup.png" style={{width:'40px'}}/>
				</IconButton> }
				<FilterDrawer
					func={this.updateFilter}
					maxAvailPrice={this.sortedPrices[0].MSRP}
					minAvailPrice={this.sortedPrices[this.sortedPrices.length - 1].MSRP}
				/>
				<Grid container>
					{/* maps each car onto the page */}
					{Object.entries(this.state.currentFilter).map(([key, value]) => {
						var badges = {};
						var foundPrice = false;
						for (var i = 0; i < this.badgePrices.length && !foundPrice; i++) {
							for (var j = 0; j < this.badgePrices[i].length; j++) {
								if (this.badgePrices[i][j].ID === value.ID) {
									badges.msrp = i;
									foundPrice = true;
									break;
								}
							}
						}
						var foundRating = false;
						for (var i = 0; i < this.badgeRatings.length && !foundRating; i++) {
							for (var j = 0; j < this.badgeRatings[i].length; j++) {
								if (this.badgeRatings[i][j].ID === value.ID) {
									badges.rating = i;
									foundRating = true;
									break;
								}
							}
						}

						var foundMpg = false;

						for (var i = 0; i < this.badgeMpg.length && !foundMpg; i++) {
							for (var j = 0; j < this.badgeMpg[i].length; j++) {
								if (this.badgeMpg[i][j].ID === value.ID) {
									badges.mpg = i;
									foundMpg = true;
									break;
								}
							}
						}
						if (value.MSRP <= this.state.upperPrice)
							return (
								<Grid item xs={12} key={key}>
									<Car
										ranking={this.sortedRatings}
										name={value.NAME}
										data={value}
										func={this.addCar}
										bValues={badges}
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
