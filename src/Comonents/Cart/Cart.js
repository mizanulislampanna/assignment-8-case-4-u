import React, { useState } from "react";
import SelectedProduct from "../SelectedProducts/SelectedProduct";
import "./Cart.css";

const Cart = (props) => {
  const { cart, clearCart } = props;
  const [random, setRandom] = useState([]);
  //   get random one
  const choseOne = () => {
    const randomChose = Math.floor(Math.random() * cart.length);
    const randomProduct = cart[randomChose];
    setRandom(randomProduct);
  };
  return (
    <div className="cart">
      <p className="selected-items">Selected Items : {cart.length}</p>
      <div>
        {cart.map((product) => (
          <SelectedProduct product={product} key={product.id}></SelectedProduct>
        ))}
      </div>
      <button className="chose-btn" onClick={choseOne}>
        <p>CHOOSE 1 FOR ME</p>
      </button>
      <button onClick={clearCart} className="chose-again">
        <p>CHOOSE AGAIN</p>
      </button>
      <p className="chosen-case">Chosen Case: </p>
      <div className="random-case">
        <div className="image">
          <img src={random.img} alt="" />
        </div>
        {random.name}
      </div>
    </div>
  );
};

export default Cart;
