import React from 'react'
import logo from '../../assets/logo.png';
import googleIcon from '../../assets/google.png';
import { useState } from "react"
import login_img from "../../assets/login-img.jpg"
import closeIcon from "../../assets/close.png"
import './Login.css'
import {Link as LinkPage } from "react-router-dom";


function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false);

  

  function handleLogin(e) {
    e.preventDefault()
    props.toggle()
    setIsVisible(prevState => !prevState)
  }




  return (
    <div className={`login ${props.isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className='left-l'>
        <img src={logo} alt="" />
        <div className='login-text'>
          <span>Welcome back !</span>
          <span>The faster you fill up, the faster you reach your goal</span>
        </div>
        <form className='loginForm' onSubmit={handleLogin}>
          <div className="email-field">
            <label htmlFor="email" >Email </label>
            <input className='log' type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="pass-field">
            <label htmlFor="password" >Password </label>
            <input className='log' type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <span>forgot Password?</span>
          <button className='login-btn' onClick={props.toggle}>Sign In</button>
          <button className='login-btn-google' onClick={props.toggle}>Sign in with Google</button>
          <span><img src={googleIcon} alt="" /></span>
          <LinkPage className='signUpRedirection' to={'/SignUp'}><div className='signUp'>
            <span>Don't have an account? </span>
            <span>Sign up</span>
          </div>
          </LinkPage>
        </form>
      </div>
      <div className='right-l'>
        <img src={closeIcon} onClick={props.toggle} />
        <img src={login_img} alt="" />
      </div>
    </div>
  )
}

export default Login
