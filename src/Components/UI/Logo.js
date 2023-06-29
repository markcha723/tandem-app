import React from "react";

import classes from "./Logo.module.css";

const Logo = () => {
  // WIP: add functionality to reset to landing page?
  const clickHandler = () => {
    console.log("wip");
  };

  return <button className={classes.logo} onClick={clickHandler}>logo goes here</button>;
};

export default Logo;
