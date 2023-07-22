import React, { createContext, useContext } from "react";

import SelectedItem from "./SelectedItem";
import TotalPrice from "./TotalPrice";
import datas from "./ProductList.json";
import { DataProvider } from "./PrdouctContext";
import { DisplayItem } from "./DisplayItem.jsx";

const CartPage = () => {
 
    return (
        
      <>
     
      <div className="container">
      <DisplayItem>
        <SelectedItem />
        <TotalPrice />
      </DisplayItem>
       
      </div>
     
      </>
    )
}
export default CartPage