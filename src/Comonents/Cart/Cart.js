import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <p>selected Items : {cart.length}</p>
    </div>
  );
};

export default Cart;
