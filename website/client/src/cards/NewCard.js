import React from 'react'
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea'
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
    media: {
        height: "29vh",
        position: 'relative'
    },
    textOverlay: {
        position: 'absolute',
        lineHeight: '48px',
        bottom: '17px',
        left: '10px',
        color: 'white',
        fontSize: '60px',
        fontWeight: 'bold',
    },
    container: {
        position: 'relative'
    },
    buttonOverlay: {
        position: 'absolute',
        bottom: '10px',
        right: '3px',
        color: 'white',
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
                  <div className={classes.container}>
                      <CardActionArea onClick = {sendData}>
                      <CardMedia
                          className={classes.media}
                          component="img"
                          image = {props.imgName}
                      />
                      <Typography className={classes.textOverlay}> {text} </Typography>
                      </CardActionArea>
                      <Button className={classes.buttonOverlay} fontSize = "large" startIcon={<InfoIcon />}/>
                  </div>
              </Card>

      </div>
  )
}

export default NewCard
