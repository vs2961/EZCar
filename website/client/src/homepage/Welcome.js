import React from 'react';
import CarAppBar from './CarAppBar';
import Grid from '@material-ui/core/Grid';
import NewCard from '../cards/NewCard';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.rounds = [
      ["Newcomer", "Family", "Exclusive"],
      ["Convertible", "SUV", "Sports"],
      ["Less Than 3", "Less Than 5", "More Than 5"]
    ]
    this.state = {
      price: 0,
      seats: 0,
      curRound: this.rounds[0],
      curIndex: 0
    }

    this.choices = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' }),
    Type : "SUV",
    Price : 50000,
    Seats : 4
    };
    
    this.updateChoices = this.updateChoices.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  updateChoices(val) {
    var updatedIndex;
    console.log(updatedIndex)
    if (this.state.curIndex >= this.rounds.length - 1) updatedIndex = this.rounds.length - 1
    else updatedIndex = this.state.curIndex + 1
    this.setState({
      price: 100,
      seats: 10,
      curIndex: updatedIndex,
      curRound: this.rounds[updatedIndex]
    })
  }

  submitData = () => {

  axios.get("https://localhost:5000/dump", this.choices).then(res => console.log(res.data))
}
  componentDidUpdate() {
    // console.log(this.state.curIndex);
    // console.log(this.state.curRound);

  }

  carImage(index) {
    const carPics = [ ['newcomer.png', 'family.png', 'exclusive.png'], ['bronze.jpg','bronze.jpg','bronze.jpg'], ['bronze.jpg','bronze.jpg','bronze.jpg'] ]
    return carPics[this.state.curIndex][index]
  }

 render() { 
   return (
   <>
    <CarAppBar/>
    <Grid container>
    {this.state.curRound.map((item, index) => {
            return (
                <Grid item xs={4} key={index}>
                <NewCard val={item}
                         func={this.updateChoices}
                         text={item}
                         imgName = {this.carImage(index)}/>
                </Grid>)
        })}
    </Grid>
    <Button onClick={this.submitData}>Submit Data</Button>
  </>
   );
 }
}

export default Welcome;

