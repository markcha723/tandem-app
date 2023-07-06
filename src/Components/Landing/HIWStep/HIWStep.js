import React from 'react';

import Circle from '../../Graphics/Circle';
import classes from './HIWStep.module.css';

const HIWStep = (props) => {
  var stepText;
  var stepSubText;
  switch (props.stepNumber) {
    case '1':
      stepText = 'Register';
      stepSubText =
        "It's quick and easy. We only need your e-mail address and name!";
      break;
    case '2':
      stepText = 'pick a time and place';
      stepSubText = 'Drop a pin on a meetup location. No fuss.';
      break;
    case '3':
      stepText = 'get matched';
      stepSubText = 'Check out their profile. Like their bike?';
      break;
    case '4':
      stepText = 'ride together';
      stepSubText = 'Accept, and meet at the time and place. Be on time!';
      break;
    default:
      stepText = 'Lorem Ipsum';
      stepSubText = 'Lorem Ipsum Subtext';
  }

  const generateStep = (textLocation) => {
    if (textLocation === 'left') {
      return (
        <React.Fragment>
          <div className={classes['step-card']}>
            <h3>
              {props.stepNumber}. {stepText}
            </h3>
            <p>{stepSubText}</p>
          </div>
          <Circle />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Circle />
          <div className={classes['step-card']}>
            <h3>
              {props.stepNumber}. {stepText}
            </h3>
            <p>{stepSubText}</p>
          </div>
        </React.Fragment>
      );
    }
  };

  return <li className={classes.step}>{generateStep(props.textSide)}</li>;
};

export default HIWStep;
