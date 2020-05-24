import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import CCard from '../cards/CCard';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },

  cardHeight: {
    height: "100%"
  }
}));

function CSSGrid() {
    const classes = useStyles();
  
    return (
      <>
        <Typography variant="subtitle1" gutterBottom>
          Material-UI Grid:
        </Typography>
        <Grid container spacing={3} classes={classes.cardHeight}>
          <Grid item xs={3} classes={classes.cardHeight}>
            <CCard/>
          </Grid>
          <Grid item xs={3}>
            <CCard/>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>xs=8</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>xs=4</Paper>
          </Grid>
        </Grid>
        </>
    )
}

export default CSSGrid;