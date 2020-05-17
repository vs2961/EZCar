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
            // {"Newcomer" : 20000, "Family Package": 45000, "Exclusive": 400000},
            [["Price", "Newcomer", [0, 20000]], ["Price", "Family Package", [20001, 45000]], ["Price", "Exclusive", [45001, Number.MAX_SAFE_INTEGER]]],
            [["Type", "Convertible", 'convertible'], ["Type", "SUV", 'suv'], ["Type", "Sports", 'sports']],
            [["Seats", "Less Than 3", [0,3]], ["Seats", "Less Than 5", [4,5]], ["Seats", "More Than 5", [5, "unlimited"]]]
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
        };

        this.updateChoices = this.updateChoices.bind(this);
        this.submitData = this.submitData.bind(this);

    }

    updateChoices(val) {
        var updatedIndex;
        if (this.state.curIndex >= this.rounds.length - 1) updatedIndex = this.rounds.length - 1
        else updatedIndex = this.state.curIndex + 1
        this.setState({
          price: 100,
          seats: 10,
          curIndex: updatedIndex,
          curRound: this.rounds[updatedIndex]
        })

        this.choices[val[0]] = val[2]
        console.log(this.choices);
      }

    submitData = () => {
        axios.post("/dump", this.choices).then(res => console.log(res.data))
    }

    componentDidUpdate() {
        console.log(this.state)
    }


    

 render() { 
   return (
   <>
    <CarAppBar/>
    <Grid container>
    {this.state.curRound.map((item, index) => {
            return <Grid item xs={4} key={index}> <NewCard val={item} func={this.updateChoices}text={item[1]}/> </Grid>
        })}
    </Grid>
    <Button onClick={this.submitData}>Submit Data</Button>
    Here is what we found. . . 
  </>
   );
 }
}

export default Welcome;
