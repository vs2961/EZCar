import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CardHeader, Button, Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

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
    const [name, setName] = useState("");
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
