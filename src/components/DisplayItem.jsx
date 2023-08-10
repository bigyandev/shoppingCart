import React from "react";
import { useState, useContext, createContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext, useCart } from "../context/CartContext";
import ProductContext from "./PrdouctContext";




export const DisplayItem = (props) => {
    const datas = useContext(ProductContext)
    const {addToCart} = useContext(CartContext)
    const {cartProducts} = useContext(CartContext)
    const {btnClicked} = useContext(CartContext)
    
    console.log(cartProducts)
    return (
        <>
     
        <div className="container">
        {datas && datas.map((data) => {
            const isAddedToCart = cartProducts.some((product) => product.id === data.id)
            console.log(isAddedToCart);
            console.log(cartProducts);
           return <div className="card" key={data.id}>
               <img src={data.image}  alt={data.name}/>
               <div className="datalist">
                <h2>{data.name}</h2>
                <h3>${data.price}</h3>
                <button disabled={isAddedToCart} onClick={() => addToCart(data)}>{isAddedToCart ? "ADDED" : "ADD TO CART"}</button>
                <button><NavLink to={`/Cart/${data.name}`}>Details</NavLink></button>
                </div>
                
                </div>

           
        }
        
        )}
        </div>
        
        </>
    )
        
    
}
