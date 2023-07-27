import React from "react";
import { useCart } from "../context/CartContext";
import { useQty } from "../context/QuantittyContext";
const TotalPrice = () => {
  const style = {
    width: "20%",
    height: "40%",
    border: "3px solid black",
    textAlign: "center"
  }

  const {cartProducts} = useCart();
  const {productQty} = useQty();
  
  const totalIndividualPrice = cartProducts.map((product) => product.price*productQty[product.id])
  
  const totalPrice = totalIndividualPrice.reduce((total,a) => total + a,0)
  
  
  
  
    return (
      <>
     
     
       
         <div style={style}>
          <h1>TOTALPRICE: {totalPrice}</h1>
        </div>
      
     
     </>
    )
}
export default TotalPrice