// import "./App.css";
import React, { useState } from "react";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";

const App = () => {
  const [appState, setAppState] = useState("landing"); //'splash', 'login', 'dashboard'

  return (
    <div className="App">
      {appState === "landing" && <Landing setAppState={setAppState} />}
      {appState === "login" && <Login setAppState={setAppState} />}
    </div>
  );
};

export default App;
