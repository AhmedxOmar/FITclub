import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero'
import JoinUs from './components/JoinUs/JoinUs';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import Home from './pages/Home/Home';
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Store from './pages/Store/Store';
import Signup from './components/Signup/Signup';



function App() {

  //const location = useLocation();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/SignUp' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
