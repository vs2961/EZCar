import React, {useState} from 'react';
import {Button} from '@rmwc/button';
// import {SimpleMenu, MenuItem} from '@rmwc/menu';
import {Drawer, DrawerHeader, DrawerSubtitle, DrawerTitle, DrawerContent} from '@rmwc/drawer';
import {List, ListItem, ListDivider, SimpleListItem} from '@rmwc/list';
import {NavLink} from 'react-router-dom';
import '@rmwc/icon/styles';
import '@rmwc/drawer/styles';

function InfoDrawer(props) {
        const [open, setOpen] = useState(false)
        return (
            <>
                <Drawer modal open={open} onClose={() => setOpen(false)}>
        <DrawerHeader>
          <DrawerTitle>Options</DrawerTitle>
          <DrawerSubtitle>Explore!</DrawerSubtitle>
        </DrawerHeader>


        <DrawerContent>
          <List>
          {/* self explanatory but each list item points to specific pages of interest */}
            <NavLink to="/"><ListItem><b>Introduction (DEBUG)</b></ListItem></NavLink>
            <ListDivider></ListDivider>
            <SimpleListItem
            graphic="account_circle"
            text="Profile"
            />

            <ListDivider></ListDivider>
            <SimpleListItem 
            graphic='directions_car'
            text="Cars"
            />
            <ListDivider></ListDivider>
  
            <NavLink to="/about">
              <SimpleListItem
              graphic="supervisor_account"
              text="About"
              />
            </NavLink>
          </List>
        </DrawerContent>
      </Drawer>

      <Button  onClick={() => setOpen(!open)} raised>
        Options
      </Button>
            </>
        );
}

export default InfoDrawer;
