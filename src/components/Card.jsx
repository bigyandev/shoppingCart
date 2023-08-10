import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const container_btn = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  margin: "5px",
};
const style_btn = {
  padding: "5px",
};
const style_deletebtn = {
  backgroundColor: "red",
  color: "white",
  marginBottom: "10px",
};

const Card = ({ cart, handleRemove }) => {
  const [totalQty, setTotalQty] = useState(cart.quantity);
  const { addToCart } = useCart();

  const handleAdd = () => {
    setTotalQty((prev) => {
      addToCart(cart, prev + 1);
      return prev + 1;
    });
  };
  const handleDecrement = () => {
    setTotalQty((prev) => {
      addToCart(cart, prev - 1);
      return prev - 1;
    });
  };

  return (
    <div className="card" key={cart.id}>
      <img src={cart.image} alt={cart.name} />
      <div className="datalist">
        <h2>{cart.name}</h2>
        <h3>${cart.price}</h3>
        <button style={style_deletebtn} onClick={() => handleRemove(cart)}>
          REMOVE
        </button>
        <div style={container_btn}>
          <button style={style_btn} onClick={handleAdd}>
            +
          </button>
          {totalQty}
          <button
            style={style_btn}
            onClick={handleDecrement}
            disabled={cart.quantity === 1}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
