import React from 'react'
import Chip from '@material-ui/core/Chip'
import {makeStyles} from '@material-ui/core/styles';

// represents a given quality of the car
const useStyles = makeStyles(theme => ({
    root: {
        fontSize: "3vh",
        margin: "24px",
        fontFamily: "Josefin Sans, sans-serif"
    }
}))
const Quality = (props) => {
    const classes = useStyles()
    return (
        <Chip className={classes.root} size="medium" label={`${props.dataType}: ${props.dataValue}`}/>
    )
}

export default Quality;