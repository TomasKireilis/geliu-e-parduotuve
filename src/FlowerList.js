import Product from "MainContent/Product";
import React from "react";

function FlowerList() {
  const flowersArray = [...Array(50)];
  return (
    <div className="flower-list">
      {flowersArray.map((item, index) => (
        <Product imgSrc="flowersIcon.jpg" title="Palergonija"></Product>
      ))}
    </div>
  );
}

export default FlowerList;
