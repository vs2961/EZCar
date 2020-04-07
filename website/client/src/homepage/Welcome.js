import React from 'react';

function Welcome(props) {
    return (
        // have some react thingy that fades in Welcome on load
        <div className={props.className}>
            <h1>EZCar</h1> 
            <h2>Streamlining the Car Search</h2>
        </div>
);
}
export default Welcome;