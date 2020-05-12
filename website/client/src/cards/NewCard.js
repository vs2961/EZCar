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
    root: {
        height: "100%",
    }
}))

function NewCard(props) {
    const [name, setName] = useState("");
    const classes = useStyles();
    const {func,text} = props;
    return (
        <div>
                <Card variant="outlined">
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100%"
                        image="bronze.jpg"
                    />
                    <CardContent>
                        <Typography>{text}</Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={func}>Click Me!</Button>
                    </CardActions>
                    </Card>
        </div>
        /*
        round.map((index, item) => {
            <Grid item xs={4}> <NewCard onClick={this.updateChoices}text={item}/>
        })
        */
    )
}

export default NewCard
