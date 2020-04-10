import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
function MaterialInfoDrawer() {
    const [state, setState] = React.useState({
        left: false,
      });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
      
          setState({ ...state, [anchor]: open });
    } 

    const topics = (anchor) => (
        <div role={"presentation"}
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}>
        

            <List>
            {['Introduction (DEBUG)', 'Profile', 'Cars', 'About'].map((text, index) => (
                <>
                <ListItem button key={text}>
                    <ListItemText primary={text}></ListItemText>
                </ListItem>
                <Divider />
                </>
            ))}
            </List>
        </div>
    )
    return (
        <div>
            <>
            <Button onClick={toggleDrawer("left", true)}>Options</Button> 
            <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                {topics("left")}
            </Drawer>
            </>
        </div>
    )
}

export default MaterialInfoDrawer;