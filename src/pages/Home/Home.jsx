import React from 'react'
import '../../pages/Home/Home.css';
import Hero from '../../components/Hero/Hero';
import Programs from '../../components/Programs/Programs';
import Reasons from '../../components/Reasons/Reasons';
import Plans from '../../components/Plans/Plans';
import Testimonials from '../../components/Testimonials/Testimonials';
import JoinUs from '../../components/JoinUs/JoinUs';
import Footer from '../../components/Footer/Footer';

import {motion} from "framer-motion";

const Home = () => {
  return (

    <div className='Home'>
      
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <JoinUs />
      <Footer />
    </div>
  )
}

export default Home;
