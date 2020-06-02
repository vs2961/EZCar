import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Cookies } from "react-cookie";
import history from "../routing/history";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import {
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
	Grid,
	Button,
	Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {
		width: "500px",
	},
}));

const Login = (props) => {
	const classes = useStyles();
	const [cookies, setCookie] = useCookies(["username", "id"]);
	const [password, setPassword] = React.useState("");
	const [username, setUsername] = React.useState("");

	const verifyForm = () => {
		return password.length > 1 && username.length > 0;
	};

	const handleSubmit = () => {
		axios
			.post("/login", {
				username: username,
				password: password,
			})
			.then(
				(res) => (
					console.log(res.data),
					setCookie("id", res.data.id, { path: "/" }),
					setCookie("username", res.data.username, { path: "/" })
				)
			);
	};
	console.log(cookies);
	if (typeof cookies.id != "undefined")
		return <p>You have already logged in.</p>;
	return (
		<>
			<Typography variant="h2">Login!</Typography>
			<Grid container>
				<Grid item xs={12}>
					<FormControl>
						<InputLabel htmlFor="my-input">Username</InputLabel>
						<Input
							onChange={(e) => setUsername(e.target.value)}
							value={username}
							valueid="user-input"
							aria-describedby="my-helper-text"
							className={classes.root}
						/>
						<FormHelperText id="my-helper-text">
							must contain alpha-numeric characters only!
						</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl>
						<InputLabel htmlFor="my-input">Password</InputLabel>
						<Input
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							valueid="pass-input"
							aria-describedby="my-helper-text"
							className={classes.root}
						/>
						<FormHelperText id="my-helper-text">
							minimum length must be 8
						</FormHelperText>
					</FormControl>
				</Grid>

				<Grid item xs={12}>
					<Button
						component={Link}
						to={{
							pathname: "/about",
							state: { hi: "hi" },
						}}
						onClick={handleSubmit}
						disabled={!verifyForm()}
					>
						Submit!
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

export default Login;
