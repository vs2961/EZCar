import React from 'react'
import Card from '@material-ui/core/Card'
import { CardContent, Typography, CardHeader, CardActionArea, CardMedia } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    
    root: {
        height: 350,
        padding: 10
    },

    media: {
        maxHeight: 200
    }
}))



export default function IntroCard(props) {
    const classes = useStyles()
    console.log(props.text)
    return (
       <Card className={classes.root}>
            <CardHeader
        title={<Typography variant="h3">{props.title}</Typography>}
            />
            <CardActionArea>
            <CardContent>
                <Typography>{props.text}</Typography>
            </CardContent>

            {props.title === "Get Started" ?  <CardMedia src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>  : ''}
           </CardActionArea>
       </Card>
    )
}
