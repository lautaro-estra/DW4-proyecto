// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/MainSection/MainSection';
import Home from './components/Home/Home';

import {Route, Routes} from 'react-router-dom';

import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);


  
  
  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const incrementarContador = () => {
    setCartCount(cartCount + 1);
  };

  const resetearContador = () => {
    setCartCount(0);
  };

  const decrementarContador = ()=> {
    setCartCount(cartCount - 1);
  }

  

  
      
      
   
  return (
    <>
    <Navbar number={cartCount} handleCart={handleCartClick}/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/productos' element=
      {
        <MainSection onReset={resetearContador} onIncrement={incrementarContador} onDecrement={decrementarContador} cartOpen={isCartOpen}/>
      } />
    </Routes>
    
    
    </>
  );
};

export default App;
