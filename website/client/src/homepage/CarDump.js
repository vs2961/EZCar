import React, { useEffect, useState } from 'react';
import '@rmwc/top-app-bar/styles';
import CarAppBar from './CarAppBar';
import Button from '@material-ui/core/Button'
function CarDump(props) {

  const [carData, updateCarData] = useState(0);

  useEffect(() => {
    fetch("/dump").then(response => response.json()).then(data => {updateCarData(data["cars"])}) 
}, [])


 return (
  <React.Fragment>
    <CarAppBar/>
    {/* {carData} */}
    <Button variant="contained">Dump Car Data</Button>
  </React.Fragment>
  
  );
}
export default CarDump;