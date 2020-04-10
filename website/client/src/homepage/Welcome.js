import React from 'react';
import {TopAppBar, TopAppBarFixedAdjust, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarActionItem} from '@rmwc/top-app-bar';
import '@rmwc/top-app-bar/styles';
import InfoDrawer from './InfoDrawer';
import ComponentInfoDrawer from './ComponentInfoDrawer';
function Welcome(props) {
    let isOpened = false;
    // console.log(isOpened);
    const func = () => isOpened = !isOpened
    func();
    // console.log(isOpened);

    return (
        // have some react thingy that fades in Welcome on load
        // <div className={props.className}>
        //     <h1>EZCar</h1> 
        //     <h2>Streamlining the Car Search</h2>
        // </div>

        <>
  <TopAppBar>
    <TopAppBarRow>
      <TopAppBarSection>
        <TopAppBarTitle>Default</TopAppBarTitle>
        {/* <TopAppBarActionItem disabled={false} label={"Mook"} checked={true}> */}
        {console.log("scooby dooby too")}
        <InfoDrawer/>
        {/* </TopAppBarActionItem> */}
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
  <TopAppBarFixedAdjust />

  {/* <div style={{ height: '100rem', padding: '1rem' }}>Scroll Me</div> */}
</>
);
}
export default Welcome;