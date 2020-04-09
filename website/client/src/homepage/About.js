import React from 'react';
import InfoDrawer from './InfoDrawer';
import Image from 'react-bootstrap';
import "../styles/about.css";
import {Card} from 'react-bootstrap';

function About() {
    const intro = `
    Look, we get it. Buying cars is a hassle. Car salesperson aren't good people! 
    They're going to scam you to buy at whatever price they're coaxing you at! 
    But today, my fellow car enthusiast, it all changes. With EZCar, you are going to 
    have a honest experience in finding the car for you. Don't worry! We'll obviously help you in the entire process. 
    Just create an account and get started!`;
    console.log("Hi");
    return (
        <div /*className={"monkeydoo"}*/ >
            <h1>What's EZCar?</h1>
            <Card className={"card"} style={{width: '36em', textAlign: 'center'}} border="primary">
                <Card.Img variant="top" src='https://previews.123rf.com/images/gnicolson/gnicolson1208/gnicolson120800073/14996899-retro-car-salesman-cartoon.jpg'></Card.Img>
                <Card.Header style={{fontSize: "1.5em", fontWeight: "bolder"}}>Introduction</Card.Header>
                <Card.Body>
                    <Card.Text>{intro}</Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}


export default About;