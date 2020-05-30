import React, { Component } from 'react'
import CarAppBar from '../homepage/CarAppBar'
import Car from './Car'
import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'
class ResultPage extends Component {
    constructor(props) {
        super(props)
        // checks to see if user enters page without going through filtering
        if (typeof(this.props.location.state.data) === 'undefined') this.carData = "ERROR"
            else this.carData = this.props.location.state.data
        if (typeof(this.props.location.state.rankings) === 'undefined') this.rankedRatings = "ERROR"
            else this.rankedRatings = this.props.location.state.rankings
        this.rankedRatings = this.props.location.state.rankings
        console.log(this.props.location.state.rankings)
        
    }


    render() {
        return (
            <div>
                <CarAppBar/>
                <h1>Here Is What We Found</h1>
                <Slider/>
                <Grid container>
                {/* maps each car onto the page */}
                {Object.entries(this.carData).map(([key, value]) => {
                    return <Grid item xs={12} key={key}><Car ranking={this.rankedRatings} name={value.NAME} data={value}/></Grid>
                })}
                </Grid>
            </div>
        )
    }
}

export default ResultPage
