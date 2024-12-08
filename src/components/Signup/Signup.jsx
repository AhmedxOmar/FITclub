import React, { useState } from 'react'
import '../Signup/Signup.css'
import SignUpImg from '../../assets/SignUpImg.jpg';
import { TfiClose } from "react-icons/tfi";
import logoOrange from '../../assets/logoOrange.png'
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');
  const [phone, setPhone] = useState('');


  const handleSignup = (e) => {
    e.preventDefault();
    console.log("heelloo");

    setEmail('');
    setPassword('');
    setPhone('');
  }

  return (
    <div className='SignUp'>
      <div className="SignupPage">
        <div className="leftSideSign">
          <img src={SignUpImg} alt="" className="SignupImg" />
        </div>
        <div className="rightSideSign">
          <TfiClose />
          <img src={logoOrange} alt="" />
          <span>The faster you fill up, the<br />faster you reach your goal.</span>
          <div className="RedirectToSignIn">
            <span>Already signed up? </span>
            <span>Log in</span>
          </div>
          <form className='Signup-form' onSubmit={handleSignup}>
            <div className="gender-field">
              <div className="radio-group">
                <div className="male-section">
                  <label htmlFor="male">
                    <input type="radio"
                      id="male"
                      name='gender'
                      value="male"
                      checked={gender === 'male'}
                      onChange={(e) => setGender(e.target.value)} />
                    Male
                  </label>
                </div>
                <div className="female-section">
                  <label htmlFor="female">
                    <input type="radio"
                      id="female"
                      name='gender'
                      value="female"
                      checked={gender === 'female'}
                      onChange={(e) => setGender(e.target.value)} />
                    Female
                  </label>
                </div>

              </div>
            </div>
            <div className="emaill-field">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div className="password-field">
              <input
                type="password"
                placeholder='Create a password'
                value={password}
                onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div className="phone-field">
              <input type="tel" placeholder='Phone number' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
            </div>
            <button type='submit' className='signup-btn'>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
