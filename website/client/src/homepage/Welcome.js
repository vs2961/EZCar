import React, { useEffect } from 'react';
import {TopAppBar, TopAppBarFixedAdjust, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarActionItem} from '@rmwc/top-app-bar';
import '@rmwc/top-app-bar/styles';
import InfoDrawer from './InfoDrawer';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import CarAppBar from './CarAppBar';
function Welcome(props) {
  useEffect(() => {
    fetch("/cars").then(response => response.json()).then(data => {console.log(data);}) 
}, [])



 return (
  <CarAppBar/>
  
  );
}
export default Welcome;