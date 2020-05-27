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
import clsx from 'clsx';

// Component for a car card
const useStyles = makeStyles(theme => ({
    root: {
        
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
const Car = (props) => { 
    const classes = useStyles()
    // state that describes whether user clicked on the expand more
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {setExpanded(!expanded)};
    return (
        <div>
            <div>
            <Card variant="outlined" className={classes.root}>
                <CardActionArea>
                {/* <CardMedia component="img" image="minimal.jpg"></CardMedia> */}
                <Typography className={classes.h6} color="primary" variant="h6">{props.name}</Typography>
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
                        <Typography variant="h2" className={classes.root}>Surprise!</Typography>
                    </CardContent>
                </Collapse>
                </Card>
            </div>
            </div>
        )
    }

export default Car