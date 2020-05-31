import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {
	List,
	ListItem,
	Divider,
	Drawer,
	ListItemAvatar,
	Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Slider from "@material-ui/core/Slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from "@material-ui/core/Icon";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
	root: {
		width: 500,
	},
}));

const sliderStyles = makeStyles((theme) => ({
	root: {
		margin: "4vw",
		maxWidth: 500,
	},
}));
const FilterDrawer = (props) => {
	const classes = useStyles();
	const sliderClass = sliderStyles();
	const [filter, setFilter] = React.useState("MSRP");
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
			value: 0,
			label: `MIN VALUE: 0`,
		},
		{
			value: 100000,
			label: `MIN VALUE: 10000`,
		},
	];
	const filterBy = (curOption) => {
		return (
			<Select value={curOption} onChange={handleFilter}>
				<MenuItem value={10}>Ten</MenuItem>
			</Select>
		);
	};

	const submitFilters = () => {
		return (
		handleDrawerClose(),
		console.log(filter),
		props.func(filter)
		)
	}

	const handleFilter = (event) => {
		setFilter(event.target.value);
	};
	const topics = (anchor) => (
		<div role={"presentation"} className={classes.root}>
			<IconButton onClick={submitFilters}>
				<CheckIcon />
			</IconButton>
			{/* Just maps out the topics, making listitems for each one */}
			<List>
				{[
					<Slider
						className={sliderClass.root}
						min={0}
						max={100000}
						color="primary"
						marks={filterRange}
					/>,
					<Select value={filter} onChange={handleFilter}>
						<MenuItem value="MSRP">Price</MenuItem>
						<MenuItem value="RATING">Rating</MenuItem>
						<MenuItem value="MPG">Efficiency</MenuItem>
					</Select>,
				].map((text, index) => (
					<>
						<ListItem key={index}>
							<ListItemAvatar key={index}>
								<Avatar key={index}>{icons[index]}</Avatar>
							</ListItemAvatar>
							{/* <ListItemText key={index}>{text}</ListItemText> */}
							{text}
						</ListItem>
						<Divider />
					</>
				))}
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
