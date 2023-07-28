import React, { useState } from "react";

import SelectedItem from "./SelectedItem";
import TotalPrice from "./TotalPrice";

const CartPage = () => {

  return (
    <div className="container">
        <SelectedItem />
        <TotalPrice />
    </div>
  );
};
export default CartPage;
