import React from "react";
import Door from "./Door";

// import HeaderCartButton from "./HeaderCartButton";
import classes from './Doors.module.css';

// return the header component and the image component that displays
// below it
const Doors = props => {
  return (
    <React.Fragment>
      <div className={classes.doors}>
        <Door num="1" />
        <Door num="2" />
        <Door num="3" />
      </div>
    </React.Fragment>
  )
};

// due to the '-' in the css name, have to reference .main-image 
// in this format: (cannot use dot notation with the dash)
// <div className={classes['main-image']}>

export default Doors;