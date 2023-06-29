import React from "react";
import Logo from "../UI/Logo";
import Button from "../UI/Button";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const loginButtonClickHandler = () => {
    props.setAppState("login");
  };

  return (
    <nav className={classes.navigation}>
      <Logo />
      <div className={classes["nav-options"]}>
        <Button
          color="secondary"
          size="small"
          onClick={loginButtonClickHandler}
        >
          Login
        </Button>
        <div className={classes.menu}>menu</div>
      </div>
    </nav>
  );
};

export default Navigation;
