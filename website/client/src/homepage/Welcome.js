import React from 'react';
import CarAppBar from './CarAppBar';
import CCard from '../cards/CCard';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import CSSGrid from './TestGrid';
import {makeStyles} from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';


function Welcome(props) {
 return (
   <>
    <CarAppBar/>
    <Grid container spacing={1} alignItems="stretch">
      <Grid item xs >
        <CCard/>
      </Grid>
      <Grid item xs >
        <CCard/>
      </Grid>
      <Grid item xs>
        <CCard/>
      </Grid>
    </Grid>

  </>
  );
}
export default Welcome;
