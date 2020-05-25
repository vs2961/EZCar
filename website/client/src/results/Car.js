import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CardHeader, Button, Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
class Car extends Component {
    render() {
        return (
            <div>
                <div>
                <Card variant="outlined">
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        image="bronze.jpg"
                    />
                    <CardContent>
                        <Typography>Hola</Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button>Click Me!</Button>
                    </CardActions>
                    </Card>
        </div>
            </div>
        )
    }
}

export default Car
