import React from 'react';
import "../styles/about.css";
import Grid from '@material-ui/core/Grid'
import IntroCard from './IntroCard'
function About() {
    const what = "More than 3 in 5 Americans believe that they are exploited when shopping at car dealerships. They seek a \“more transparent pricing process\” as well as more \“flexibility and speed.\” We get it: buying cars is a hassle. That\’s why we created EZCar: your personal car dealer. We start with the specs that matter to you––gas mileage, seating, price––and serve up the best rides. Simple, streamlined, EZ!"

    const how = `Our application is for the modern world. No one likes to get bogged down with a ton of text. 
    Images and icons are the new thing! We've made the car search  a whole lot friendlier and interactive.
    Our implementation of the badges system will allow you to understand which cars are the best that contain your desired qualities.
    Info buttons are scattered throughout the website, where you can always get clarification on any jargon or quality that will help 
    you understand the car world!`
    
    const who = `This application was created by Victor Siu, Michael Nath, Eric Kim, and Kristoff Misquitta for the 2019-2020 Google Mentorship Program.`

        const get_started = `EZCar uses Python (Beautiful Soup), SQL, React, etc.`

    console.log("Hi");
    return (
        <div >
            <h1>Welcome!</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <IntroCard title={"Our Story"} text={what}/>
                </Grid>
                <Grid item xs={6}>
                    <IntroCard title={"Tutorials"} hasImage = {true} imageSource = {"tutorial1.gif"}/>

                </Grid>
                <Grid item xs={6}>
                    <IntroCard title={"Code Used"} text={get_started}/>
                </Grid>
                <Grid item xs={6}>
                    <IntroCard title={"Team"} text={who}/>
                </Grid>

            </Grid>
        </div>
    )
}


export default About;
