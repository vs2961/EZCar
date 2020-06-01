import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import InfoDrawer from './InfoDrawer';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import FilterDrawer from '../results/FilterDrawer'
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    title: {
        paddingLeft: '1em',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(10),
    },
}));
function CarAppBar(props) {
    const classes = useStyles();
    
      {/* App Bar will contain mainly background stuff, and the drawer */}
    return (
      
        <AppBar position='static' className={classes.root}>
        <ToolBar>
        <InfoDrawer className={classes.menuButton}/>
        <Grid container>
          <Grid item xs={12}>
          <Typography variant='h5' className={clsx(classes.title, classes.menuButton)}>
            EZCar
          </Typography>
          </Grid>
        </Grid>
        
        </ToolBar>
        </AppBar>
    )
}

export default CarAppBar
