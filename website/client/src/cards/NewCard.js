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
                      <CardActionArea className={classes.container} onClick = {sendData}>
                      <CardMedia
                          className={classes.media}
                          component="img"
                          image = {props.imgName}
                      />
                      <Typography className={classes.textOverlay}> {text} </Typography>
                      </CardActionArea>
                      <Button className={classes.buttonOverlay} onClick={() => createModal(props.id)} fontSize = "large" startIcon={<InfoIcon />}/>
                </div>
              </Card>
      </div>
  )
}

function createModal(id) {
    const body = infoText(id)
    alert(body)
}

function infoText(id) {
    switch (id) {
        case 0:
            return "High School & College students, newly married couple"
        case 1:
            return "Typical household with 4 to 6 people, couple with newborn child"
        case 2:
            return "Avid luxury car fans, CEOs"
        case 3:
            return "Best of both worlds; sports cars and sedans; roof can be retracted to provide a open-air experience"
        case 4:
            return "A hefty and solid car that seats 4-6 people; Smoother driving; Spacious"
        case 5:
            return "A sleek, low profile car that seats 2-4 people; Easy to drive; Cost effective"
        case 6:
            return "Seats 1 or 2 people"
        case 7:
            return "Seats 3 or 4 people"
        case 8:
            return "Seats more than 5 people"
    }
}

export default NewCard
