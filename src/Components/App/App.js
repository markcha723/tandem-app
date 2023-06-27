import "./App.css";
import React, { useState } from "react";
import Dummy from "../Dummy";

const App = () => {
  const [appState, setAppState] = useState("splash"); //'splash', 'login', 'dashboard'

  return (
    <div className="App">
      {appState === "splash" && <Dummy setAppState={setAppState} />}
    </div>
  );
};

export default App;
