import React, { useState } from "react";

import classes from "./Dummy.module.css";
import Button from "../Components/UI/Button";

const Dummy = (props) => {
  const [input, setInput] = useState("hi");

  const sayHi = () => {
    setInput("hi");
    console.log(input);
  };

  const sayBye = () => {
    setInput("bye");
    console.log(input);
  };

  return (
    <div className={classes.card}>
      <Button text="hi" color="primary" onClick={sayHi} />
      <Button text="bye" color="secondary" size="small" onClick={sayBye} />
    </div>
  );
};

export default Dummy;
