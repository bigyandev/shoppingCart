import React, { useState,useContext } from "react";
import { useCart } from "../context/CartContext";
import Card from "./Card";

const SelectedItem = () => {
    const style = {
        width: "70%",
        height: "80%",
        overflowY: "scroll",
        border: "3px solid black",
        overflowX:"hidden",
        padding: "20px",
       
        
    }
    const style_item = {
    display:  "flex",
    justifyContent: "start",
    alignItems: "start",
    height: "100%",
    flexWrap: "wrap",
    gap: "20px",
    

    }
    const container_btn = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        margin: "5px"
        
        
    }
    const style_btn = {
        padding: "5px"
    }
    const style_deletebtn = {
        backgroundColor: "red",
        color: "white",
        marginBottom: "10px"
    }
    
    const {cartProducts} = useCart()
    const data = useContext(ProductContext)
    const {setCartProducts} = useCart();

    const handleRemove = (deleteproduct) => {
       const newProduct = cartProducts.filter((product) => product.id !== deleteproduct.id)
       setCartProducts(newProduct);
    }

    

 return (
    
    <div style={style}>
      <div style={style_item}>
        {cartProducts &&
          cartProducts.map((cart) => {
            return (
              <Card handleRemove={() => removeFromCart(cart)} key={cart.id} cart={cart} />
            );
          })}
      </div>
    </div>
  );
};
export default SelectedItem;
