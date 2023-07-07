import React from 'react';
import classes from './Landing.module.css';
import Navigation from '../Navigation/Navigation';
import HeroHeader from './HeroHeader/HeroHeader';
import HowItWorks from './HowItWorks/HowItWorks';
import CTA from './CTA/CTA';
import Footer from './Footer/Footer';
import Form from '../Form/Form';

const Landing = (props) => {
  return (
    <main className={classes['landing-page']}>
      <Navigation setAppState={props.setAppState} />
      <HeroHeader setAppState={props.setAppState} />
      <HowItWorks />
      <CTA />
      <Form />
      <Footer />
    </main>
  );
};

export default Landing;
