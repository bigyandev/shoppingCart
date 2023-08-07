import React from "react";
import { useCart } from "../context/CartContext";


const style = {
  width: "20%",
  height: "40%",
  border: "3px solid black",
  textAlign: "center"
};


const TotalPrice = () => {
  const {cartProducts} = useCart();
  
  const totalPrice = cartProducts.reduce((prev,curr) => prev + (curr.price * curr.quantity) , 0);
  const totalItem = cartProducts.reduce((prev,curr) => prev + curr.quantity,0)
    return (
        <div style={style}>
             <h1>TOTALPRICE: {totalPrice}</h1>
             <h1>TOTALITEM: {totalItem}</h1>
        </div>
    )
}
export default TotalPrice