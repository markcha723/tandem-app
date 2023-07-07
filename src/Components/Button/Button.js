import React from "react";

import classes from "./Button.module.css";

const Button = ({ color, size, onClick }) => {
  return (
    <button
      className={`${classes.button} ${classes[color]} ${
        size === "small" ? classes.small : classes.large
      }`}
      onClick={onClick}
    >
      {/* {props.children} */}
    </button>
  );
  // onClick - dynamic? diff context for each button
  // props.children - within JSX tag
};

export default Button;
