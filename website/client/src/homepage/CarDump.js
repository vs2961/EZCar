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
    backgroundColor: '#7557b5',
    borderRadius: '1.1em'
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
    {["Trucks", "SUVs", "Van-Minivans", "Hatchbacks", "Electrics", "Crossovers", "Convertibles", "Luxaries", "Wagons", "Coupes", "Sedans"]
    .map((text, index) => <Button variant="contained" color="primary" className={classes.root} key={index}>Load {text}</Button>)}
    

  </React.Fragment>
  
  );
}
export default CarDump;