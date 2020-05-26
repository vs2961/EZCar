import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import InfoDrawer from './InfoDrawer';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        paddingLeft: '1em',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
function CarAppBar() {
    const classes = useStyles();
    
      {/* App Bar will contain mainly background stuff, and the drawer */}
    return (
        <AppBar position='static'>
        <ToolBar>
          <InfoDrawer/>
          <Typography variant='h5' className={classes.title}>
              EZCar
          </Typography>
        </ToolBar>
          </AppBar>
    )
}

export default CarAppBar
