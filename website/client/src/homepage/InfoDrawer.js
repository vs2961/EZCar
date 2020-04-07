import React, {useState} from 'react';
import {Button} from '@rmwc/button';
import {SimpleMenu, MenuItem} from '@rmwc/menu';
import {Drawer, DrawerHeader, DrawerSubtitle, DrawerTitle, DrawerContent} from '@rmwc/drawer';
import {List, ListItem, ListDivider} from '@rmwc/list';
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
            <ListItem>My Profile</ListItem>
            <ListDivider></ListDivider>
            <ListItem>Cars</ListItem>
            <ListDivider></ListDivider>
            <ListItem>About</ListItem
            >
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
