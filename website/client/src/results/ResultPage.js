import React, { Component } from 'react'
import CarAppBar from '../homepage/CarAppBar'
import Car from './Car'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
class ResultPage extends Component {
    constructor(props) {
        super(props)
        // checks to see if user enters page without going through filtering
        if (typeof(this.props.location.state) === 'undefined') this.carData = "ERROR"
        else this.carData = this.props.location.state.data
    }

    render() {
        return (
            <div>
                <CarAppBar/>
                <h1>Here Is What We Found</h1>
                <Grid container>
                {/* maps each car onto the page */}
                {Object.entries(this.carData).map(([key, value]) => {
                    return <Grid item xs={12} key={key}><Car name={value.NAME} data={value}/></Grid>
                })}
                </Grid>
            </div>
        )
    }
}

export default ResultPage
