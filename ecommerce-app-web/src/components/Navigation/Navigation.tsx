import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home';
import Checkout from '../../pages/Checkout/Checkout';

type Props = {
  handleOpen: (state: boolean) => void;
}

const Navigation =({handleOpen}: Props)=> {
    return (
        <div>
          <NavBar handleOpen={handleOpen}/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </div>
    )
}

export default Navigation;