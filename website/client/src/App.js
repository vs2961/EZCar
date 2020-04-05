import React from 'react';

import {BrowserRouter, Link, Switch, Route, useParams} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path={"/"} exact component={Home}/>
        </Switch>
      </BrowserRouter>
  );
}

function Home(props) {
    return (
        <div>
            <h1>You're at the home page!</h1>
        </div>
    );
}


export default App;
