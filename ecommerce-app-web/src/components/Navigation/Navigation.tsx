import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';



const Navigation =()=> {
    return (
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </div>
    )
}

export default Navigation;