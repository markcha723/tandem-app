import React from "react";

import Button from "../UI/Button";
import classes from "./Header.module.css";

const Header = (props) => {
  const getStartedHandler = () => {
    props.setAppState("register");
  };

  const tutorialHandler = () => {
    document
      .getElementById("howitworks")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={classes.header}>
      <div className={classes.intro}>
        <div>
          <h1 className={classes.tandem}>tandem</h1>
          <div className={classes.tagline}>
            <span>sign up,</span>
            <span>pick a place,</span>
            <span>ride together.</span>
          </div>
        </div>
        <div className={classes.buttons}>
          <Button color="secondary" size="large" onClick={getStartedHandler}>
            get started
          </Button>
          <Button color="grey" size="small" onClick={tutorialHandler}>
            how it works
          </Button>
        </div>
      </div>
      <div className={classes.image}></div>
    </header>
  );
};

export default Header;
