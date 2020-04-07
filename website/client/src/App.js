import {Menu} from '@rmwc/menu';
import {SimpleMenu, MenuItem, Button} from '@rmwc/menu';
import React from 'react';

function App() {
  return (
      <div>
      <Home/>
      <Welcome/>
      <SimpleMenu handle={<Button>Simple Menu</Button>}>
          <MenuItem>Cookies</MenuItem>
          <MenuItem>Pizza</MenuItem>
          <MenuItem>Icecream</MenuItem>
      </SimpleMenu>
      </div>

  )
}

function Home() {
  return (
      <h1> Hi</h1>
  )
}

function Welcome() {
  return (
      <h2>He</h2>
  )
}

export default App;
