import React from 'react';
import CarAppBar from './CarAppBar';
import Grid from '@material-ui/core/Grid';
import NewCard from '../cards/NewCard';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { ThemeProvider } from '@material-ui/core';


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
        // binding class methods to be referenced with the proper 'this'
        this.updateChoices = this.updateChoices.bind(this);
        this.submitData = this.submitData.bind(this);

    }
    // updates the rounds and makes sure to updates the JSON 
    updateChoices(val) {
        var updatedIndex;
        if (this.state.curIndex >= this.rounds.length - 1) updatedIndex = this.rounds.length - 1
        else updatedIndex = this.state.curIndex + 1
        this.setState({
          curIndex: updatedIndex,
          curRound: this.rounds[updatedIndex]
        })

        this.choices[val[0]] = val[2]
        this.choices['futureRound'] = this.rounds[updatedIndex]
        console.log(this.choices);
      }
    // currently in debug mode. When user is done selecting their choices, the callback fxn submitData will be auto-called
    submitData = () => {
        axios.post("/dump", this.choices).then(res => console.log(res.data))
    }
    // hanldes the  filtering on the front-end
    componentDidUpdate() {
        axios.post("/available", this.choices).then(res => {
            var newArray = []
            for (var i = 0; i < res.data.length; i++) {
                newArray[i] = res.data[i]
            }
            this.setState({
                avails: newArray
            })
        })
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
    Here is what we found. . . 
  </>
   );
 }
}

export default Welcome;
