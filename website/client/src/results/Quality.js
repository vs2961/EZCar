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

// general theme for gold, silver, bronze. change primary and secondary value to choose the ranking color.
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

//   separate color for eletric. 
  const eletricTheme = createMuiTheme({
      palette: {
          primary: {
            main: '#ec407a'
          }
      }
  })

// decides which palette to use.
const decideTheme = (value) => {
    if (value === "IS ELECTRIC") return eletricTheme
    else return theme
}

const Quality = (props) => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={decideTheme(props.dataType)}>
        <Chip color="primary" clickable className={classes.root} size="medium" label={`${props.dataType}: ${props.dataValue}`}/>
        </ThemeProvider>
    )
}

export default Quality;