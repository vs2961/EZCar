import React, { Component } from 'react'

class Test extends Component {
    render() {
        return (
            <div>
                <h3>Hi {this.props.name}</h3>
            </div>
        )
    }
}

export default Test;

