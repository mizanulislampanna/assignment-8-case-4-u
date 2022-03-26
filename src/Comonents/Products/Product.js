import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { img, name, price } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>
          Price : <span className="price">${price}</span>
        </p>
      </div>
      <button onClick={() => addToCart(product)} className="button-cart">
        <p>Add To Cart</p>
        <FontAwesomeIcon
          className="icon"
          icon={faShoppingCart}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
