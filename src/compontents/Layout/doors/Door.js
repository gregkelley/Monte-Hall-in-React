import classes from './Door.module.css';

// return the header component and the image component that displays
// below it
const Door = (props) => {
  return (
    <div className={classes.door}>
      <h1>Door #{props.num}</h1>
    </div>
  );
};

// due to the '-' in the css name, have to reference .main-image
// in this format: (cannot use dot notation with the dash)
// <div className={classes['main-image']}>

export default Door;
