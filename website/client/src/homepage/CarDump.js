import React, { useEffect, useState} from 'react';
import '@rmwc/top-app-bar/styles';
import {makeStyles} from '@material-ui/core/styles';
import CarAppBar from './CarAppBar';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root : {
    fontWeight: 'bold',
    padding: '1.1em',
    margin: "1.1em",
    backgroundColor: "#03f4fc"
  }
})
function CarDump(props) {
  const classes = useStyles();
  const [carData, updateCarData] = useState(0);

  useEffect(() => {
    fetch("/dump").then(response => response.json()).then(data => {updateCarData(data["cars"])}) 
}, [])


 return (
  <React.Fragment>
    <CarAppBar/>
    {/* {carData} */}
    {["Trucks", "SUVs", "Van-Minivans", "Hatchbacks", "Electrics", "Crossovers", "Convertibles", "Luxaries", "Wagons", "Coupes", "Sedans"]
    .map((text, index) => <Button variant="contained" color="primary" className={classes.root} key={index}>Load {text}</Button>)}
    {/* <Button variant="contained" color="secondary" className={classes.root}>Dump Car Data</Button>
    <Button variant="contained" color="warning" className={classes.root}> Load SUVs</Button>
    <Button variant="contained" color="warning" className={classes.root}> Load SUVs</Button> */}

  </React.Fragment>
  
  );
}
export default CarDump;