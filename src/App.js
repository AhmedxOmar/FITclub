import './App.css';
import Home from './pages/Home/Home';
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter, useLocation}  from "react-router-dom";
import Store from './pages/Store/Store';
import Signup from './components/Signup/Signup';
import axios from "axios";
import { StrictMode } from 'react';



function App() {

  //const location = useLocation();

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route   path='/' element={<Home />} />
        <Route path='/store' element={<Store />}/>
        <Route path='/SignUp' element={<Signup />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
