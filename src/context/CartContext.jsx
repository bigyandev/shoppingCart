import { createContext, useContext, useState } from "react";

const initialState = {
  products: [],
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (item , quantity) => {
    console.log({quantity , item});
    const isItemInCart = cartProducts.find(
      (cartItem) => cartItem.id === item.id
    );

    if (isItemInCart) {
      setCartProducts(
        cartProducts.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity }
            : cartItem
        )
      );
    } else {
      setCartProducts([...cartProducts, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (payload) => {
    const filteredProducts = cartProducts.filter(product => product.id !== payload.id)
    setCartProducts(filteredProducts)
  }

  return (
    <CartContext.Provider value={{ addToCart, cartProducts, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
