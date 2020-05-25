import React, { Component } from 'react'
import CarAppBar from '../homepage/CarAppBar'
import Car from './Car'
class ResultPage extends Component {
    constructor(props) {
        super(props)
        
        if (typeof(this.props.location.state) === 'undefined') this.carData = "ERROR"
        else this.carData = this.props.location.state.data
    }
    render() {
        return (
            <div>
                <CarAppBar/>
                <h1>Here Is What We Found</h1>
                {Object.entries(this.carData).map(([key, value]) => {
                    return [value.NAME, value.PRICE]
                })}}
            </div>
        )
    }
}

export default ResultPage
