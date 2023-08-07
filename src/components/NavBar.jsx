import React from "react"
import { NavLink } from "react-router-dom"
import { useCart } from "../context/CartContext"

const NavBar = () => {
   const {cartProducts} = useCart()
    return (
        <nav>
    <li>
      <NavLink className="link" to="/" >HOME</NavLink>
    </li>
    <li>
    <NavLink className="link" to="/Cart">CART </NavLink><span style={{padding: "3px", 
    backgroundColor: "white", 
    border: "1px solid black", 
    position: "absolute", 
    borderRadius: "40%",
    top: "2px",
   
    
    }}>
        {cartProducts.length}</span>
    </li>
   </nav>
    )
}
export default NavBar