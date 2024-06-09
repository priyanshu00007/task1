import React, { useState } from 'react';
import './Loginsignup.css';
import userIcon from './person.png';
import emailIcon from './email.png';
import passwordIcon from './password.png';


const Loginsignup = () => {
  const [action,setactions]= useState("Sign up");
  return (
    <div className="container">
      <div className="header">
        <h2 className="signup">{action}</h2>
        <div className="underline"></div>
      </div>
      <div className="form">
        {action==="Login"?<div></div>:<div className="input-group">
          <img src={userIcon} alt="User Icon" />
          <input type="text" placeholder="Enter your Name" />
        </div>}
        <div className="input-group">
          <img src={emailIcon} alt="Email Icon" />
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div className="input-group">
          <img src={passwordIcon} alt="Password Icon" />
          <input type="password" placeholder="Enter Your Password" />
        </div>
        {action==="Login"?<div></div>:<div className="forgot">Forgot password? <span className='span'>Click Here</span></div>}
      
      </div>
      <div className="submit-container">
        <button className={action==="Login"?"submit grey":"submit"} onClick={()=>{
          setactions("Sign up")
        }}>Sign Up</button>
        <button className={action==="Sign up"?"submit grey":"submit"}onClick={()=>{
          setactions("Login")
        }}>Login</button>
      </div>
    </div>
  );
};

export default Loginsignup;
