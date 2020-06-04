import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {
	List,
	ListItem,
	Divider,
	Drawer,
	ListItemAvatar,
	Avatar,
	Input,
	ListItemText
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Slider from "@material-ui/core/Slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from "@material-ui/core/Icon";
import CheckIcon from "@material-ui/icons/Check";

const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 2,
});

const useStyles = makeStyles((theme) => ({
	root: {
		width: 500,
	},
}));

const priceLabel = makeStyles((theme) => ({
	root: {
		width: "90vw",
		maxWidth: 300,
		marginLeft: "80px"
	},
	valueLabel: {
		background: "transparent",
		color: "red",
	},
	money: {
		width: "30px",
	},
}));

const FilterDrawer = (props) => {
	const classes = useStyles();
	const sliderClasses = priceLabel();
	const [filter, setFilter] = React.useState("MSRP");
	const [finalValue, setFinal] = React.useState(props.maxAvailPrice);
	const [open, setOpen] = React.useState(false);
	// looks to see whether the user presses certain keys (mainly for UX)
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	const icons = [<AttachMoneyIcon />, <Icon>filter_alt</Icon>];
	const filterRange = [
		{
			value: props.minAvailPrice,
			label: `MIN VALUE: ${formatter.format(props.minAvailPrice)}`,
		},
		{
			value: props.maxAvailPrice,
			label: `MAX VALUE: ${formatter.format(props.maxAvailPrice)}`,
		},
	];

	const submitFilters = () => {
		return handleDrawerClose(), props.func(filter, finalValue);
	};

	const handleFilter = (event) => {
		setFilter(event.target.value);
	};

	const handleChange = (event, newValue) => {
		setFinal(newValue);
	};
	const topics = (anchor) => (
		<div role={"presentation"} className={classes.root}>
			<IconButton onClick={submitFilters}>
				<CheckIcon />
			</IconButton>
			{/* Just maps out the topics, making listitems for each one */}

			<List>
                <h2>Price Slider</h2>
				<Input disabled={true} value={formatter.format(finalValue)}></Input>
                    <ListItem>
					<ListItemText>
						<Slider
							className={sliderClasses.root}
							max={props.maxAvailPrice}
							min={props.minAvailPrice}
							marks={filterRange}
							onChange={handleChange}
							value={finalValue}
							defaultValue={props.maxAvailPrice}
						/>
					</ListItemText>
				</ListItem>
                <h2>Sort By</h2>
				<Select value={filter} onChange={handleFilter}>
					<MenuItem value="MSRP">Price</MenuItem>
					<MenuItem value="RATING">Rating</MenuItem>
					<MenuItem value="MPG">Efficiency</MenuItem>
				</Select>
			</List>
		</div>
	);
	return (
		<div>
			<IconButton edge="end" onClick={handleDrawerOpen}>
				<SearchIcon />
			</IconButton>
			<Drawer variant="persistent" anchor={"right"} open={open}>
				{topics("right")}
			</Drawer>
		</div>
	);
};

export default FilterDrawer;
