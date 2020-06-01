import React from 'react'
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea'

const useStyles = makeStyles(theme => ({
    media: {
        height: "91vh",
        position: 'relative'
    },
    overlay: {
        position: 'absolute',
        bottom: '17px',
        left: '10px',
        color: 'white',
        fontSize: '60px',
        fontWeight: 'bold'
    }
}))

function NewCard(props) {
    const classes = useStyles();
    const {val,func,text} = props;
    const sendData = () => {
        func(val);
    }
    return (
        <div>
                <Card variant="outlined">
                    <CardActionArea onClick = {sendData}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        image = {props.imgName}
                    />
                    <Typography className={classes.overlay}> {text} </Typography>
                    </CardActionArea>
                </Card>
        </div>
    )
}

export default NewCard
