import React from "react";
import { useCart } from "../context/CartContext";

import SelectedItem from "./SelectedItem";
import TotalPrice from "./TotalPrice";


const CartPage = () => {
const {removeAllCart } = useCart()

  return (
    <div className="container">
    
        <SelectedItem />
        <button onClick={removeAllCart}>REMOVE CART</button>
     
        <TotalPrice />
    </div>
  );
};
export default CartPage;
