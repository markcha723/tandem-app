import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${classes[props.color]} ${
        props.size === "small" ? classes.small : classes.large
      }`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
