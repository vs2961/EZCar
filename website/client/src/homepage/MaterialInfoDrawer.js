import React from 'react'

function MaterialInfoDrawer() {
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
      
          setState({ ...state, [anchor]: open });
    } 
    return (
        <div>
            const toggleDrawr
        </div>
    )
}
