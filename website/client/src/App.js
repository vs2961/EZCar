import {Button} from '@rmwc/button';
import {SimpleMenu, MenuItem} from '@rmwc/menu';
import '@rmwc/button/styles';
import '@rmwc/menu/styles';
import React from 'react';
import InfoDrawer from './homepage/InfoDrawer';
import Welcome from "./homepage/Welcome";
import "./App.css";

function App() {
  return (
      <div>
      <Welcome />
      <InfoDrawer/>
      </div>

  )
}

export default App;
