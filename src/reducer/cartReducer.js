export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
        console.log({state});
    //   const isItemInCart = cartProducts.find(
    //     (cartItem) => cartItem.id === item.id
    //   );

    //   if (isItemInCart) {
    //     setCartProducts(
    //       cartProducts.map((cartItem) =>
    //         cartItem.id === item.id
    //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
    //           : cartItem
    //       )
    //     );
    //   } else {
    //     setCartProducts([...cartProducts, { ...item, quantity: 1 }]);
    //   }
    default:
      return state;
  }
};
