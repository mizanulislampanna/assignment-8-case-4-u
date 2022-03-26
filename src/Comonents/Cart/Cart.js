import React from "react";
import SelectedProduct from "../SelectedProducts/SelectedProduct";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <p className="selected-items">Selected Items : {cart.length}</p>
      <div>
        {cart.map((product) => (
          <SelectedProduct product={product} key={product.id}></SelectedProduct>
        ))}
      </div>
    </div>
  );
};

export default Cart;
