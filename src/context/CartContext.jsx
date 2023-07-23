import {createContext, useContext, useState} from 'react'

const initialState = {
  products: [],
}

export const CartContext = createContext(initialState)

export const CartProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([])
  const [btnClicked, setBtnCliked] = useState(false)
  const addToCart = (products) => {
    setCartProducts([...cartProducts, products])
    setBtnCliked((btnClicked) => !btnClicked)
    
  }
  return <CartContext.Provider value={{addToCart, cartProducts, btnClicked}}>{children}</CartContext.Provider>
}

export const useCart = () => {
  return useContext(CartContext)
}
