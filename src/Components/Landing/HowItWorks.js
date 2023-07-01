import React from "react";

import HIWStep from "./HIWStep";
import Circle from "../Graphics/Circle";
import classes from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <section className={classes["how-it-works"]} id="howitworks">
      <div className={classes["section-title"]}>
        <h2>how it works</h2>
        <Circle />
      </div>
      <ol className={classes.steps}>
        <HIWStep stepNumber="1" textSide="right" />
        <HIWStep stepNumber="2" textSide="left" />
        <HIWStep stepNumber="3" textSide="right" />
        <HIWStep stepNumber="4" textSide="left" />
      </ol>
    </section>
  );
};

export default HowItWorks;
