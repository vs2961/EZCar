import React from 'react';
import {TopAppBar, TopAppBarFixedAdjust, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarActionItem} from '@rmwc/top-app-bar';
import '@rmwc/top-app-bar/styles';
import InfoDrawer from './InfoDrawer';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import CarAppBar from './CarAppBar';
function Welcome(props) {
 return (
  <CarAppBar/>
  );
}
export default Welcome;