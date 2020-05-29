import React from 'react'
import Chip from '@material-ui/core/Chip'
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles'

// represents a given quality of the car
const useStyles = makeStyles(theme => ({
    root: {
        fontSize: "3vh",
        margin: "24px",
        fontFamily: "Josefin Sans, sans-serif"
    }
}))

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffca28',
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        contrastText: '#ffcc00',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

const handleElectric = (isElectric) => {
    if (isElectric) return true 
    return false
}

const handleStatus = (ranking) => {
    if (ranking == 0) return 'yellow'
    // else if 
}
const Quality = (props) => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
        <Chip color="primary" className={classes.root} size="medium" label={`${props.dataType}: ${props.dataValue}`}/>
        </ThemeProvider>
    )
}

export default Quality;