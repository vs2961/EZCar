import React from 'react';
import "../styles/about.css";
import Grid from '@material-ui/core/Grid'
import IntroCard from './IntroCard'
function About() {
    const what = `
        Look, we get it. Buying cars is a hassle. Car salesperson aren't good people! 
    They're going to scam you to buy at whatever price they're coaxing you at! 
    But today, my fellow car enthusiast, it all changes. With EZCar, you are going to 
    have a honest experience in finding the car for you. Don't worry! We'll obviously help you in the entire process. 
    Just create an account and get started!`

    const how = `Our application is for the modern world. No one likes to get bogged down with a ton of text. 
    Images and icons are the new thing! We've made the car search  a whole lot friendlier and interactive.
    Our implementation of the badges system will allow you to understand which cars are the best that contain your desired qualities.
    Info buttons are scattered throughout the website, where you can always get clarification on any jargon or quality that will help 
    you understand the car world!`
    
    console.log("Hi");
    return (
        <div >
            <h1>Welcome!</h1>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <IntroCard title={"What is this?"} text={what}/>
                </Grid>
                <Grid item xs={4}>
                    <IntroCard title={"Get Started"}/>
                </Grid>
                <Grid item xs={4}>
                    <IntroCard title={"Background Info"}/>
                </Grid>
                <Grid item xs={4}>
                    <IntroCard title={"How?"} text={how}/>
                </Grid>
            </Grid>
        </div>
    )
}


export default About;