import React from "react";
import classes from "./Landing.module.css";
import Navigation from "../Navigation/Navigation";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import CTA from "./CTA";
import Footer from "./Footer";

const Landing = (props) => {
  return (
    <main className={classes["landing-page"]}>
      <Navigation setAppState={props.setAppState} />
      <Header />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
};

export default Landing;
