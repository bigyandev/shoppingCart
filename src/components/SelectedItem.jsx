
import React, { useState } from "react"
import { useContext } from "react"
import ProductContext from "./PrdouctContext"
import { useCart } from "../context/CartContext"


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
    const {cartProducts} = useCart()
    const data = useContext(ProductContext)

    
 return (
    
    <>
    <div style={style}>
        <div style = {style_item}>
        {cartProducts && cartProducts.map((cart) => {
            return (
                <div className="card" key={cart.id}>
                    <img src={cart.image} alt={cart.name} />
                    <div className="datalist">
                        <h2>{cart.name}</h2>
                        <h3>${cart.price}</h3>
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