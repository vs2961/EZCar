import React from 'react';
import CarAppBar from './CarAppBar';
import Grid from '@material-ui/core/Grid';
import NewCard from '../cards/NewCard';
import Button from '@material-ui/core/Button';
import axios from 'axios';
// import { ThemeProvider } from '@material-ui/core';
import history from '../routing/history';


class Welcome extends React.PureComponent {
    constructor(props) {
        super(props);
        this.rounds = [
            [["Price", "Newcomer", [0, 20000]], ["Price", "Family Package", [20001, 45000]], ["Price", "Exclusive", [45001, Number.MAX_SAFE_INTEGER]]],
            [["Type", "Convertible", 'convertible'], ["Type", "SUV", 'suv'], ["Type", "Sports", 'sports']],
            [["Seats", "Less Than 3", [0,3]], ["Seats", "Less Than 5", [4,5]], ["Seats", "More Than 5", [5, "unlimited"]]]
        ]
        this.state = {
            curRound: this.rounds[0],
            curIndex: 0,
            avails: [true, true, true]
        }
        this.choices = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'User\'s Choices' }),
            Price: null,
            Type: null,
            Seats: null,
            futureRound: this.rounds[1]
        };

        this.updateChoices = this.updateChoices.bind(this);
        this.submitData = this.submitData.bind(this);
        this.carImage = this.carImage.bind(this);
    }

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

    // currently in debug mode. When user is done selecting their choices, the callback fxn submitData will be auto-called
    submitData = () => {
        const getGeneral = axios.post("/dump", this.choices)
        const getRankings = axios.post("dump_rating", this.choices)
        axios.all([getGeneral, getRankings]).then(axios.spread((...responses) => {
            const general = responses[0].data
            const ranked = responses[1].data
            history.push({
                pathname: '/results',
                state: {data: general, rankings: ranked}
            })
        }))
        
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
                {/* conditional rendering */}
                return this.state.avails[index] &&
                           <Grid item xs={4} key={index}> 
                                <NewCard val={item} 
                                    func={this.updateChoices}
                                    text={item[1]}
                                    imgName={this.carImage(index)} 
                                /> 
                           </Grid>

            })}
            </Grid>
            <Button onClick={this.submitData}>Submit Data</Button>
            Here is what we found. . . 
            </>
        );
    }
}

export default Welcome;
