import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price } = props.product;
  console.log(props);
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price : ${price}</p>
      </div>
      <button className="button-cart">
        <p>Add To Cart</p>
      </button>
    </div>
  );
};

export default Product;
