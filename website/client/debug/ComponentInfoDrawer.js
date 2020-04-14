import React, { Component } from 'react'
import {Button} from '@rmwc/button';

import {Drawer, DrawerHeader, DrawerSubtitle, DrawerTitle, DrawerContent} from '@rmwc/drawer';
import {List, ListItem, ListDivider, SimpleListItem} from '@rmwc/list';
import {NavLink} from 'react-router-dom';
import '@rmwc/drawer/styles';

export class ComponentInfoDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false
        }
        this.setClose = this.setClose.bind(this);
        this.setOpen = this.setOpen.bind(this);
        console.log(this.props)
    }

    

    setClose() {
        this.setState({
            open: false
        })
    };

    setOpen() {
        this.setState({
            open: true
        })
    }

    render() {
        return (
            <>
            <Drawer modal open={this.state.open} onClose={this.setClose}>
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
        <Button  onClick={this.setOpen} raised>
            Options
      </Button>
            </>
        );
    }
}

export default ComponentInfoDrawer
