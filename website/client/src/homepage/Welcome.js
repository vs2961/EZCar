import React from 'react';
import CarAppBar from './CarAppBar';
import CCard from '../../debug/CCard';
import Grid from '@material-ui/core/Grid';
import NewCard from '../cards/NewCard';


class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.rounds = [
      ["Newcomer", "Family Package", "Exclusive"],
      ["Convertible", "SUV", "Sports"],
      ["Less Than 3", "Less Than 5", "More Than 5"]
    ]
    this.state = {
      price: 0,
      seats: 0,
      curRound: this.rounds[0],
      curIndex: 0
    }
    
    this.updateChoices = this.updateChoices.bind(this);
  }

  updateChoices(e) {
    var updatedIndex;
    if (this.state.curIndex >= this.rounds.length - 1) updatedIndex = this.rounds.length - 1
    else updatedIndex = this.state.curIndex + 1
    this.setState({
      price: 100,
      seats: 10,
      curIndex: updatedIndex,
      curRound: this.rounds[updatedIndex]
    })
  }

  componentDidUpdate() {
    console.log(this.state.curIndex);
    console.log(this.state.curRound);
  }


 render() { 
   return (
   <>
    <CarAppBar/>
    <Grid container>
    {this.state.curRound.map((item, index) => {
            return <Grid item xs={4} key={index}> <NewCard func={this.updateChoices}text={item}/> </Grid>
        })}
    </Grid>
  </>
   );
 }
}

export default Welcome;

