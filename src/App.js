

import './App.css';
import React from 'react';
import HomePage  from './components/HomePage';
import {  NavLink, Route, Routes } from 'react-router-dom';
import CartPage from './components/CartPage';
import ProductContext from "./components/PrdouctContext.jsx"
import { DataProvider } from './components/PrdouctContext.jsx';
import {  CartProvider } from './context/CartContext';
import NavBar from "./components/NavBar"


function App() {
  
  return (
   <>
     
   
   
   <DataProvider>
   <CartProvider>
    <NavBar />
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
