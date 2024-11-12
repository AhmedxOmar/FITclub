import React from 'react'
import logo from '../../assets/logo.png';
import googleIcon from '../../assets/google.png';
import { useState } from "react"
import login_img from "../../assets/login-img.jpg"
import closeIcon from "../../assets/close.png"
import './Login.css'
import {Link as LinkPage } from "react-router-dom";


function Login({toggle, isVisible, handleLogin}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({});


  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setErrors ({...errors, [name]: ''});
    switch(name){
      case 'email':
        setEmail(value);
        break;
      case 'password' :
        setPassword(value);
        break;
      default :
        break;
    }
  }

  function loginSubmit(e){
    e.preventDefault()
    const newErrors = {};

    if(!email) {
      newErrors.email = "Email is required";
    }
    if(!password){
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0){
      var url = "http://localhost/login.php";
      var headers = {
        "Accept": "application/json",
        "Content-Type" : "application/json"
      };
      var Data = {
        email: email,
        password: password
      };
      fetch(url, {
        method:"POST",
        headers: headers,
        body: JSON.stringify(Data)
      }).then((response) => response.json())
      .then((response)=>{
        console.log(response);
        handleLogin();
        toggle();
      }).catch((err)=>{
        console.log(err);
      });
    }
    else{
      alert("All fields are required!");

    }
  }

  return (
    <div className={`login ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className='left-l'>
        <img src={logo} alt="" />
        <div className='login-text'>
          <span>Welcome back !</span>
          <span>The faster you fill up, the faster you reach your goal</span>
        </div>
        <form className='loginForm' onSubmit={loginSubmit}>
          <div className='email-field'>
            <label>Email </label>
            <input className={`log ${errors.email && 'error'}`} required type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="pass-field">
            <label>Password </label>
            <input className={`log ${errors.password && 'error'}`} required type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <span>forgot Password?</span>
          <button className='login-btn' onClick={loginSubmit}>Sign In</button>
          <button className='login-btn-google' onClick={toggle}>Sign in with Google</button>
          <span><img src={googleIcon} alt="" /></span>
          <LinkPage className='signUpRedirection' to={'/SignUp'}><div className='signUp'>
            <span>Don't have an account? </span>
            <span>Sign up</span>
          </div>
          </LinkPage>
        </form>
      </div>
      <div className='right-l'>
        <img src={closeIcon} onClick={()=>{
          toggle();
        }} />
        <img src={login_img} alt="" />
      </div>
    </div>
  )
}

export default Login
