import React from 'react'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import CardContent from "@material-ui/core/CardContent";
import clsx from "clsx";
import CardMedia from "@material-ui/core/CardMedia";
import Slider from "@material-ui/core/Slider";
import PowerIcon from "@material-ui/icons/Power";
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Quality from '../results/Quality';


const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    media: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",
		maxWidth: 300,
	},
}))

const myStyle = {
    backgroundColor: '#ffebee',
}
const myStyle2 = {
    fontWeight: '800',
    color: '#ff0026'
}


const CompareCard = (props) => {
    const classes = useStyles()
    const submitChange = (val) => {
        props.func(val.data["ID"])
    }
    const getRank = (val, filter, isBack) => {
        var arr = props.cars.map((x) => parseFloat(x[filter])).sort((a, b) => a - b)
        if (isBack) {
            arr = arr.reverse()
        }
        return  arr.indexOf(val);
    }
    return (
        <Card variant="outlined" className={classes.root}>
            <CardContent>
            {<CardMedia className={classes.media} component="img" src="image" image={props.data.IMAGE_LINK}></CardMedia>}
            </CardContent>
            <CardContent>
                <Typography variant="h4">{props.data.NAME}</Typography>
                {Object.entries(props.data).map(([key, value]) => {
                    if (key === "TYPE" || key === "IS ELECTRIC") {
                        return <Quality dataType={key} dataValue={value.toString()} rank={-1}/>
                    }
                    else if (key === "HORSEPOWER" || key === "SEATS" || key === "MPG" || key === "RATING") {
                        return <Quality dataType={key} dataValue={value.toString()} rank={getRank(value, key, true)}/>
                    }
                    else if (key != "IMAGE_LINK" && key != "ID" && key != "NAME" && key != "PRICE_RANGE") {
                        return <Quality dataType={key} dataValue={value.toString()} rank={getRank(value, key, false)}/>
                    }
                })}
            </CardContent>
            <CardActions className={classes.media}>
                <Button value={props.data.ID} onClick={() => submitChange(props)} style = {myStyle}>
                    <Typography variant = 'h3' style={myStyle2}>X</Typography>
                </Button>
            </CardActions>
        </Card>
    )
}

export default CompareCard
