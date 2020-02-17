import React from 'react';
import './App.css';

import {BrowserRouter, Link, Switch, Route, useParams} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Switch>

              <Route path={"/"} exact component={Home}/>

              <Route path={"/second-page"} exact component={SecondPage} />

              {/* 'num' is a parameter that we can use using the useParams() hook */}
              <Route path={"/special/:num"} exact component={Special} />

              <Route path={"/"} component={Lost} />

        </Switch>
      </BrowserRouter>
  );
}

function Home(props) {
    return (
        <div>
            <h1>You're at the home page!</h1>
            <Navigation/>
        </div>
    );
}

function SecondPage(props){
    return (
        <div>
            <h1>You're on the second page</h1>
            <Navigation/>
        </div>
    )
}

function Special(props){
    // this will be a dictionary that looks something like {num: <whatever it is from the url>}
    const params = useParams();

    return (
        <div>
            <h1>Your special number is {params.num}</h1>
            <Navigation/>
        </div>
    );
}

function Lost(props) {

    return (
        <div>
            <h1>Are you sure that page exists?</h1>
            <Navigation/>
        </div>
    )
}

function Navigation(props){
    return (
        <div>
            <Link to={"/"}>
                <p>Click here to go back home</p>
            </Link>

            <Link to={"/second-page"}>
                <p>Click here to go to the second page</p>
            </Link>

            <Link to={"/special/" + Math.random() * 30}>
                <p>Click here to get your special number</p>
            </Link>
        </div>
    )
}


export default App;
