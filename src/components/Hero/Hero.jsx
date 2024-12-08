import React from "react"
import Header from "../Header/Header"
import Login from "../Login/Login"
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back_final from "../../assets/hero_image_back_final.png"
import Heart from "../../assets/heart.png"
import {motion} from 'framer-motion'
import { useState } from "react"
const Hero = () => {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true:false;

    const [seen, setSeen] = useState(false)

    function togglePop(){
        setSeen(!seen);
    };

    return (
        <div className="hero">
            <div className="left-h">
                <Header />
                {/*Slogan Span */}
                <div className="the-best-ad">
                    <motion.div
                    initial={{left: mobile? "178px":'238px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}
                    ></motion.div>
                    <span>The Best Fitness Club In The City</span>
                </div>

                {/*Hero  Text*/}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>Fitness Programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <button className="btn" onClick={togglePop}>Get Started</button>
                    {seen && <Login toggle={togglePop} isVisible={seen} />}
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn nav-btn" onClick={togglePop}>Join Now</button>
                {seen && <Login toggle={togglePop} isVisible={seen} />}

                <motion.div className="heart-rate"
                initial={{right:'-1rem'}}
                transition={{...transition, type: 'tween'}}
                whileInView={{right:'5rem'}}>
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>120 bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                initial={{right: '17rem'}}
                whileInView={{right: '18.2rem'}}
                transition={{...transition, type: 'tween'}}
                src={hero_image_back_final} alt="" className="hero-image-back" />
            </div>
            {seen ? <div className="overlay"></div>:null}
        </div>
        
    )
}

export default Hero