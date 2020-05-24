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
        // contains the "rounds" that the user will see. It's in format [roundType, option, [values]]
        this.rounds = [
            [["Price", "Newcomer", [0, 20000]], ["Price", "Family Package", [20001, 45000]], ["Price", "Exclusive", [45001, Number.MAX_SAFE_INTEGER]]],
            [["Type", "Convertible", 'convertible'], ["Type", "SUV", 'suv'], ["Type", "Sports", 'sports']],
            [["Seats", "Less Than 3", [0,3]], ["Seats", "Less Than 5", [4,5]], ["Seats", "More Than 5", [5, "unlimited"]]]
        ]
        // the react states needed to handle UX. 
        this.state = {
            curRound: this.rounds[0],
            curIndex: 0,
            avails: [true, true, true]
        }

        // JSON to be sent to backend for database filtering
        this.choices = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'User\'s Choices' }),
            Price: null,
            Type: null,
            Seats: null,
            futureRound: this.rounds[1]
        };

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


 render() { 
   return (
   <>
    <CarAppBar/>
    <Grid container>
    {this.state.curRound.map((item, index) => {
        {/* conditional rendering */}
            if (this.state.avails[index]) {
                return <Grid item xs={4} key={index}> <NewCard val={item} func={this.updateChoices}text={item[1]}/> </Grid>
            }
        })}
    </Grid>
    <Button onClick={this.submitData}>Submit Data</Button>
  </>
   );
 }
}

export default Welcome;
