import React, { useEffect, useState } from 'react';
import {TopAppBar, TopAppBarFixedAdjust, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarActionItem} from '@rmwc/top-app-bar';
import '@rmwc/top-app-bar/styles';
import InfoDrawer from './InfoDrawer';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import CarAppBar from './CarAppBar';
function CarDump(props) {

  const [carData, updateCarData] = useState(0);

  useEffect(() => {
    fetch("/dump").then(response => response.json()).then(data => {updateCarData(data["cars"])}) 
}, [])


 return (
  <React.Fragment>
    <CarAppBar/>
    {carData}
  </React.Fragment>
  
  );
}
export default CarDump;
