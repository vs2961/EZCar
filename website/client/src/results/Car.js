import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {makeStyles} from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse'
import CardContent from '@material-ui/core/CardContent'
import Quality from './Quality'
import clsx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia'
import Slider from '@material-ui/core/Slider'
import PowerIcon from '@material-ui/icons/Power';
// Component for a car card
const useStyles = makeStyles(theme => ({
    root: {
        // maxWidth: 700,
    },
    media: {
        maxWidth: 300
    },
    slider: {
        marginLeft: '2vw'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}))

const sliderStyles = makeStyles(theme => ({
    root: {
        margin: '2vw',
        maxWidth: 500
    }
})) 
// const determineRankings = (carData, ratingRankings) => {
//     const ranks = []
//     // Object.entries(carData).map(([key, value]) => 
//     if (carData.RATING > ratingRankings[0][ratingRankings[0].length - 1].RATING) ranks.push("gold")
//     else if (carData.RATING > ratingRankings[1][ratingRankings[1].length - 1].RATING) ranks.push("silver")
//     else if (carData.RATING > ratingRankings[2][ratingRankings[2].length - 1].RATING) ranks.push("bronze")
//     else if (carData.RATING > ratingRankings[3][ratingRankings[3].length - 1].RATING) ranks.push("unknown")
//     return ranks
// }

const priceRange = (minValue, maxValue) =>  {
    return (
    [
    {
        value: minValue,
        label: `MIN VALUE: ${minValue}`
    },
    {
        value: maxValue,
        label: `MAX VALUE: ${maxValue}`
    }
])
}


const Car = (props) => { 
    const classes = useStyles()
    const sliderClass = sliderStyles()
    // state that describes whether user clicked on the expand more
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {setExpanded(!expanded)};
    const marketPrice = props.data.PRICE_RANGE.split(" ")
    const lowerBound = parseInt(marketPrice[0])
    const upperBound = parseInt(marketPrice[2])
    return (
        <div>
            <div>
            <Card variant="outlined">
                <CardActionArea>
                <Typography className={clsx(classes.h6, classes.root)} color="primary" variant="h6">{props.name}</Typography>
                <PowerIcon/> 
                {/* <CardMedia className={classes.media} component="img" src="image" image={props.data.IMAGE_LINK}></CardMedia> */}
                </CardActionArea>
                <CardActions>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                {/* what the user sees after clickng on the expand more icon */}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <div className={sliderClass.root}>
                        <Slider min={lowerBound} max={upperBound} className={sliderClass.root} color="primary" disabled marks={priceRange(lowerBound, upperBound)}/>
                    </div>
                        {/* <Typography variant="h2">Surprise!</Typography> */}
                        {Object.entries(props.data).map(([key, value]) => {
                            var electric = undefined
                            if (key === "IS ELECTRIC" && value) electric = true
                            if (!["IMAGE_LINK", "NAME"].includes(key)) return <Quality isElectric={electric} key={key} dataType={key} dataValue={value}/>
                            return undefined
                        })}
                    </CardContent>
                </Collapse>
                </Card>
            </div>
            </div>
        )
    }

export default Car;