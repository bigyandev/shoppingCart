import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Card from "./Card";

const style = {
  width: "70%",
  height: "80%",
  overflowY: "scroll",
  border: "3px solid black",
  overflowX: "hidden",
  padding: "20px",
};
const style_item = {
  display: "flex",
  justifyContent: "start",
  alignItems: "start",
  height: "100%",
  flexWrap: "wrap",
  gap: "20px",
};

const SelectedItem = () => {
  const { cartProducts , removeFromCart } = useCart();

  return (
    <div style={style}>
      <div style={style_item}>
        {cartProducts &&
          cartProducts.map((cart) => {
            return (
              <Card handleRemove={() => removeFromCart(cart)} key={cart.id} cart={cart} />
            );
          })}
      </div>
    </div>
  );
};
export default SelectedItem;
