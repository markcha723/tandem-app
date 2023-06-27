import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" component={Login} />
      </Routes>
    </div>
  );
};

export default App;
