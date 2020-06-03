import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import InfoDrawer from "./InfoDrawer";
import Typography from "@material-ui/core/Typography";
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	title: {
		paddingLeft: "1em",
		textAlign: "center",
		fontWeight: "bold",
	},
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(10),
	},
	logButton: {
		margin: "0px 50px 0px 0px",
		fontWeight: "bold",
	},
}));

const buttonTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#f48fb1",
		},
		secondary: {
			main: "#f48fb1",
		},
	},
});

const redirectToLog = React.forwardRef((props, ref) => (
	<Link ref={ref} to="/login" {...props} />
));

const redirectToReg = React.forwardRef((props, ref) => (
	<Link ref={ref} to="/register" {...props} />
));

const LogOut = (removeCookie, user) => {
	removeCookie("id");
	removeCookie("username");
	user(false);
};

function CarAppBar(props) {
	const classes = useStyles()
	const [cookies, setCookie, removeCookie] = useCookies(['username', 'id'])
	const [loggedIn, logUser] = React.useState(
		typeof cookies.id != "undefined"
	);

	const loadLoginInfo = () => {
		if (!loggedIn)
			return (
				<ThemeProvider theme={buttonTheme}>
					<Button
						className={classes.logButton}
						component={redirectToLog}
						color="primary"
					>
						Login
					</Button>
					<Button
						className={classes.logButton}
						component={redirectToReg}
						color="secondary"
					>
						Register
					</Button>
				</ThemeProvider>
			);
		else {
			return (
				<ThemeProvider theme={buttonTheme}>
					<Button
						className={classes.logButton}
						color="primary"
						onClick={() => LogOut(removeCookie, logUser)}
					>
						Logout
					</Button>
				</ThemeProvider>
			);
		}
	};

	{
		/* App Bar will contain mainly background stuff, and the drawer */
	}
	return (
		<AppBar position="static" className={classes.root}>
			<ToolBar>
				<InfoDrawer className={classes.menuButton} />
				<Grid container>
					<Grid item xs={12}>
						<Typography
							variant="h5"
							className={clsx(classes.title, classes.menuButton)}
						>
							EZCar
						</Typography>
					</Grid>
				</Grid>
				{loadLoginInfo()}
			</ToolBar>
		</AppBar>
	);
}

export default CarAppBar;
