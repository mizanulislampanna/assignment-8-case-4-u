import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name } = props.product;
  console.log(props);
  return (
    <div className="produtc">
      <img src={img} alt="" />
    </div>
  );
};

export default Product;