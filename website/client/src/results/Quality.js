import React from 'react'
import Chip from '@material-ui/core/Chip'
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles'
import PowerIcon from '@material-ui/icons/Power';
import StarIcon from '@material-ui/icons/Star';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import StoreIcon from '@material-ui/icons/Store';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import EventSeatIcon from '@material-ui/icons/EventSeat';

// represents a given quality of the car
const useStyles = makeStyles(theme => ({
    root: {
        fontSize: "3vh",
        margin: "24px",
        fontFamily: "Josefin Sans, sans-serif",
        padding: "10px"
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

  const possibleValues = {
    'HORSEPOWER': <PowerSettingsNewIcon/>,
    "IS ELECTRIC": <PowerIcon/>,
    "MARKET PRICE": <StoreIcon/>, 
    "MPG": <CardTravelIcon/>,
    "MSRP": <AttachMoneyIcon/>,
    "PRICE_RANGE": <AttachMoneyIcon/>,
    "RATING": <StarIcon/>,
    "SEATS": <EventSeatIcon/>,
    "TYPE": <DriveEtaIcon/>,
  }

// decides which palette to use.
const decideTheme = (value) => {
    if (value === "IS ELECTRIC") return eletricTheme
    else return theme
}

// const market = (value, p) => {
    //if (value === "MARKET PRICE" & p.dataValue === 0) return "N/A"
     // else return p.dataValue
//}

const Quality = (props) => {
    const classes = useStyles()
    console.log(props)
    var dataKey = props.dataType
    // const chipValue = (props.dataValue == 0) ? "N/A" : props.dataValue;
    return (
        <ThemeProvider theme={decideTheme(props.dataType)}>
        <Chip color="primary" clickable className={classes.root} size="medium" icon={possibleValues[dataKey]}label={`${dataKey}: ${"Hi"}`}/>
        </ThemeProvider>
    )
}

export default Quality;