import React, { useState } from 'react'
import '../Signup/Signup.css'
import SignUpImg from '../../assets/SignUpImg.jpg';
import { TfiClose } from "react-icons/tfi";
import logoOrange from '../../assets/logoOrange.png'
import {Link} from "react-router-dom";


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

  function handleSubmit(){
    var url = "http://localhost/registration.php";
    var headers = {
      "Accept" : "application/json",
      "Content-Type": "application/json"
    };
    var Data = {
      email: email,
      password: password,
      phone: phone,
      gender: gender
    }
    fetch(url, {
      method:"POST",
      headers: headers,
      body: JSON.stringify(Data)
    }).then((response) => response.json())
    .then((response)=>{
      console.log(response);
    }).catch((err)=>{
      console.log(err);
    });
  }

  return (
    <div className='SignUp'>
      <div className="SignupPage">
        <div className="leftSideSign">
          <img src={SignUpImg} alt="" className="SignupImg" />
        </div>
        <div className="rightSideSign">
          <Link to={'/'}>
          <TfiClose className='close-svg' />
          </Link>
          <img src={logoOrange} alt="" />
          <span>The faster you fill up, the<br />faster you reach your goal.</span>
          <div className="RedirectToSignIn">
            <span>Already signed up? </span>
            <span>Log in</span>
          </div>
          <form className='Signup-form' action='http:localhost:3000/server.php'method='POST' onSubmit={handleSignup}>
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
                required
                onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div className="phone-field">
              <input type="tel" placeholder='Phone number' value={phone} required onChange={(e) => { setPhone(e.target.value) }} />
            </div>
            <button type='submit' className='signup-btn' onClick={handleSubmit}>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
