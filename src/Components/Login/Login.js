import React, { useState } from "react";

const Login = () => {
    // will need to pass functions 
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })


    const handleChange = e => {
        setLoginData({ ...formData, [e.target.name]: e.target.value });
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // do the thing here!
        clearInputs()
      };

    const clearInputs = () => {
        setLoginData({email: '', password:'' })
    }

    
      return (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
            />
            <button type="submit">Log in</button>
          </form>
        </div>
      );
    };



export default Login