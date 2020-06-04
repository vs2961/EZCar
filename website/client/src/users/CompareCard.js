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

const useStyles = makeStyles(theme => ({
    root: {
        height: "150vh"
    },
    media: {
		// maxWidth: 300,
	},
}))


const CompareCard = (props) => {
    const classes = useStyles()
    console.log(props.data)
    return (
        <Card variant="outlined" className={classes.root}>
            <CardActionArea>
            {<CardMedia className={classes.media} component="img" src="image" image={props.data.IMAGE_LINK}></CardMedia>}
            </CardActionArea>
            <CardContent>
                <Typography variant="h4">{props.data.NAME}</Typography>
                {Object.entries(props.data).map(([key, value]) => {
                    console.log(key)
                    if (key != "IMAGE_LINK" && key != "ID" && key != "NAME") return <Typography>{key}:{value}</Typography>
                })}
            </CardContent>
        </Card>
    )
}

export default CompareCard