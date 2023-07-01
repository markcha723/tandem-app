import React from "react";

import classes from "./Circle.module.css";

const Circle = (props) => {
  /* leaving props.children here because we MIGHT be able to find a way to
  make an animation play when this div is centered on the viewport, 
  and to reveal the animation when a user scrolls past this Circle element.

  maybe increase the size as the animation plays?
  
  note: look into element.getBoundingClientRect()*/

  return (
    <div className={classes.outer}>
      <div className={classes.inner}>{props.children}</div>
    </div>
  );
};

export default Circle;
