import {createContext, useContext, useState} from 'react'

const initialState = {
  products: [],
}

export const CartContext = createContext(initialState)

export const CartProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([])
  
  const addToCart = (products) => {
    setCartProducts([...cartProducts, products])
    
    
  }
  return <CartContext.Provider value={{addToCart, cartProducts, setCartProducts}}>{children}</CartContext.Provider>
}

 export const useCart = () => {
  return useContext(CartContext)
}
