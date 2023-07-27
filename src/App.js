

import './App.css';
import React from 'react';
import HomePage  from './components/HomePage';
import {  NavLink, Route, Routes } from 'react-router-dom';
import CartPage from './components/CartPage';
import ProductContext from "./components/PrdouctContext.jsx"
import { DataProvider } from './components/PrdouctContext.jsx';
import {  CartProvider } from './context/CartContext';


function App() {
  
  return (
   <>
      
   <nav>
    <li>
      <NavLink className="link" to="/" >HOME</NavLink>
    </li>
    <li>
    <NavLink className="link" to="/Cart">CART</NavLink>
    </li>
   </nav>
   
   <DataProvider>
   <CartProvider>
   <Routes>
    <Route path="/" element={<HomePage />} />
    
    <Route path="/Cart" element={<CartPage />} />
   </Routes>
   </CartProvider>
   </DataProvider>
   
  
  
   
   </>
  )
}

export default App;
