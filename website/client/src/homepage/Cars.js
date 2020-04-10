import React, { useState, useEffect } from 'react';
import InfoDrawer from './InfoDrawer';
import "../styles/about.css";
import {Card} from 'react-bootstrap';
import Test from './Test';
import ComponentInfoDrawer from './ComponentInfoDrawer';

function Cars() {
    const [currState, setCurrState] = useState("");

    useEffect(() => {
            fetch('/cars').then(res => res.json()).then(data => {
                          setCurrState(data);
                    });
            }, []);

    return (
        currState
    )
}


export default Cars;
