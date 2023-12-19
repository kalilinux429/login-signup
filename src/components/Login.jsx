import React from 'react';
import signup from './signup.css';
import pas from './pas.png';
import pass from './pass.png';
import user from  './user.png';

const Login = () => {
  return (
   <div className="container">
    <div className="header">
        <div className="text">Sign up</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
        <div className="inputs">
            <img src={user}alt=""></img>
            <input type='text'></input>
        </div>
        <div className="inputs">
            <img src={pas} alt=""></img>
            <input type='email'></input>
        </div>
        <div className="inputs">
            <img src={pass} alt=""></img>
            <input type='password'></input>
        </div>
    </div>
   </div>
  )
}

export default Login;