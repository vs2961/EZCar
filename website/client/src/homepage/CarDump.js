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
  const [carData, updateCarData] = useState([]);
  const [type, updateType] = useState("");

  useEffect(() => {
    fetch("/dump").then(response => response.json()).then(data => {updateCarData(data)}) 
}, [])

    //  console.log(carData);
  var data = carData.filter((x) => x["TYPE"] == type.toLowerCase());
  var update = Object.keys(data).map((key) => [Number(key), data[key]]);
  // data contains object with cars, update contains array of that stuff
  console.log(update);
 return (
  <React.Fragment>
    <CarAppBar/>
    {["Truck", "SUV", "Van-Minivan", "Hatchback", "Electric", "Crossover", "Convertible", "Luxury", "Wagon", "Coupe", "Sedan"]
    .map((text, index) => <Button 
        variant="contained" 
        color="primary" 
        className={classes.root} 
        key={index}
        onClick={() => updateType(text)}>
            Load {text}
        </Button>
    )}

  </React.Fragment>
  
  );
}
export default CarDump;
