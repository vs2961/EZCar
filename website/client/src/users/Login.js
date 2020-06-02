import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useCookies} from 'react-cookie'
import history from "../routing/history";
import axios from 'axios'
import {
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
	Grid,
	Button,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {
		width: "500px",
	},
}));

const Login = (props) => {
	const [cookies, setCookies] = useCookies(['id'])
	const classes = useStyles();
	const [password, setPassword] = React.useState("");
	const [username, setUsername] = React.useState("");

	const verifyForm = () => {
		return password.length > 1 && username.length > 0;
	};

	const handleSubmit = () => {
        axios.post("/login", {
            username: username,
            password: password
        }).then(res => (console.log(res.data.id), setCookies('id', res.data.id, {path: '/'})))
	};

	return (
		<form>
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
						onClick={handleSubmit}
						component="submit"
						disabled={!verifyForm()}
					>
						Submit!
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default Login;
