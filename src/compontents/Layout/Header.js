import React from "react";

// import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';

// return the header component and the image component that displays
// below it
const Header = props => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Monte Hall Experimentation</h1>
          {/* <HeaderCartButton onClick={props.onShowCart} /> */}
      </header>
    </React.Fragment>
  )
};

// due to the '-' in the css name, have to reference .main-image 
// in this format: (cannot use dot notation with the dash)
// <div className={classes['main-image']}>

export default Header;