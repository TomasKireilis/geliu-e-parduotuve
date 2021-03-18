import React from "react";

function Product(props) {
  return (
    <div className="product-container">
      <img className="product-image" src={props.imgSrc}></img>
      <div className="product-title">{props.title}</div>
    </div>
  );
}

export default Product;
