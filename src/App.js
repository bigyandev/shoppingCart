

import './App.css';
import React from 'react';
import HomePage  from './components/HomePage';
import {  NavLink, Route, Routes } from 'react-router-dom';
import CartPage from './components/CartPage';
import ProductContext from "./components/PrdouctContext.jsx"
import { DataProvider } from './components/PrdouctContext.jsx';
import {  CartProvider } from './context/CartContext';
import NavBar from "./components/NavBar"
import ProductDetail from './components/ProductDetail';


function App() {
  
  return (
   <>
     
   
   
   <DataProvider>
   <CartProvider>
    <NavBar />
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/Cart" element={<CartPage />} />
    <Route path="/Cart/:id" element={<ProductDetail />} />
   </Routes>
   
   </CartProvider>
   </DataProvider>
   
  
  
   
   </>
  )
}

export default App;
