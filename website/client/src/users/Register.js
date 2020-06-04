import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useCookies} from 'react-cookie'
import history from "../routing/history";
import axios from "axios";
import {
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
	Grid,
	Button,
} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
const useStyles = makeStyles((theme) => ({
	root: {
		width: "500px",
	},
}));

const Register = (props) => {
	const [cookies, setCookie] = useCookies(['username', 'id']);
	const classes = useStyles();
	const [password, setPassword] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [showPassword, setVisibility] = React.useState(false);
	const toggleVisibility = () => {
		setVisibility(!showPassword)
	}

	const verifyForm = () => {
		return password.length > 1 && username.length > 0;
	};

	const handleSubmit = () => {
        axios.post("/signup", {
            username: username,
            password: password
        }).then(res => console.log(res.data))
		history.push({pathname: "/login"});

	};
	if (typeof cookies.username != 'undefined') return <p>You must log out first before entering this page</p>
	return (
		<><h1>Register</h1>
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
							type = {showPassword ? 'text' : 'password'}
							endAdornment = {
								<InputAdornment> <IconButton onClick = {toggleVisibility}> {!showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>} </IconButton></InputAdornment>
							}
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
		</>
	);
};

export default Register;