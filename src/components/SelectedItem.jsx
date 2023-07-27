
import React, { useState } from "react"
import { useContext } from "react"
import ProductContext from "./PrdouctContext"
import { useCart } from "../context/CartContext"
import { useQty } from "../context/QuantittyContext"


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

    const {incrementQty} = useQty()
    const {decrementQty} = useQty();
    const {productQty} = useQty();
 return (
    
    <>
    <div style={style}>
        <div style = {style_item}>
        {cartProducts && cartProducts.map((cart) => {
           const itemQty = productQty[cart.id] || 0
           console.log("id",cart.id)
           
            return (
                <div className="card" key={cart.id}>
                    <img src={cart.image} alt={cart.name} />
                    <div className="datalist">
                        <h2>{cart.name}</h2>
                        <h3>${cart.price}</h3>

                        <button style={style_deletebtn} onClick={() => handleRemove(cart)}>REMOVE</button>
                       <div style={container_btn}>
                        <button style={style_btn} onClick={() => incrementQty(cart.id)}>+</button>
                        {itemQty}
                        <button style={style_btn} onClick={() => decrementQty(cart.id)}>-</button>
                       
                         
                    </div>
                    <span>PRICE: ${cart.price * itemQty}</span>


                    </div>
                </div>
              
           
            )
        })}
    </div>
    </div>
    </>
)
}
export default SelectedItem