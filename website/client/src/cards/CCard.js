import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import InfoIcon from '@material-ui/icons/Info';

// makes the card used when leading users to the cars of their dreams

const useStyles = makeStyles(theme => ({
    root : {
        height: '100%'
        },
    header: {
        fontFamily: theme.font.header,
        backgroundColor: theme.background.expose,
    },
    subtitle: {
        fontFamily: theme.font.subtitle,
        padding: '0.5em'
    },

    price: {
        fontFamily: theme.font.price,
        color: '#DFAD7A'
    },

    

    
  }))

function CustomCard() {
    const classes = useStyles();
    return (
       <>
            <Card 
            classes={{
                root: classes.root
            }} 
            variant="outlined">

            <CardHeader 
            
            
            className={classes.header}
            title={<>
                <Typography 
                align='center' variant='h4' classes={{h4: classes.header}}>The Wallet Friendly
                </Typography> 

                <Typography align='center' classes={{subtitle1: classes.subtitle}} variant='subtitle1'>For those starting to hit the road
                </Typography>
                </>
                }
            />
            <Divider/>
                <CardContent>
                    <Typography align="center" variant="h2" classes={{h2: classes.price}}>Under $30,000</Typography>
                    <Typography align="center" variant="h2" classes={{h2: classes.price}}>Under $30,000</Typography>
                    <Typography align="center" variant="h2" classes={{h2: classes.price}}>Under $30,000</Typography>
                    <Typography align="center" variant="h2" classes={{h2: classes.price}}>Under $30,000</Typography>
                    

                </CardContent>

                <CardActions>
                    <Button color="secondary" variant='outlined' size='large'> <InfoIcon/></Button>
                </CardActions>
            </Card>
        </>
    )
}

const theme = createMuiTheme({
    background : {expose: '#FF8800'},
    font : {
        header: 'Pacifico, cursive',
        subtitle: 'Fredoka One, cursive',
        price: 'Roboto Mono, monospace'
    },
    cardBackground: {
        
    }
});

export default function CCard(){
    return (
    <ThemeProvider theme={theme}>
        <CustomCard/>
    </ThemeProvider>
    )
}

