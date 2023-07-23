import React from "react";
import { useState, useContext, createContext } from "react";
import { CartContext, useCart } from "../context/CartContext";
import ProductContext from "./PrdouctContext";




export const DisplayItem = (props) => {
    const datas = useContext(ProductContext)
    const {addToCart} = useContext(CartContext)
    const {cartProducts} = useContext(CartContext)
    const {btnClicked} = useContext(CartContext)
    
    
    
    return (
        <>
     
        <div className="container">
        {datas && datas.map((data) => {
           return <div className="card" key={data.id}>
               <img src={data.image}  alt={data.name}/>
               <div className="datalist">
                <h2>{data.name}</h2>
                <h3>${data.price}</h3>
                <button onClick={() => addToCart(data)}>{btnClicked ? "ADDED" : "ADD TO CART"}</button>
                
                </div>
                
                </div>

           
        }
        
        )}
        </div>
        
        </>
    )
        
    
}
