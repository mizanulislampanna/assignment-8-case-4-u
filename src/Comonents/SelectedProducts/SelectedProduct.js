import React from "react";
import "./SelectedProduct.css";

const SelectedProduct = (props) => {
  const { img, name } = props.product;
  return (
    <div className="selected-item">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default SelectedProduct;
