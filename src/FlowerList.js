import Product from "MainContent/Product";
import React from "react";

function FlowerList() {
  const flowersArray = [...Array(50)];
  return (
    <div className="flower-list">
      {flowersArray.map((item, index) => (
        <Product
          key={index}
          imgSrc="flowersIcon.jpg"
          title="Palergonija"
          info="Snaputinių augalų gentis, kuriai priklauso krūmai, puskrumiai ir žolės. Auginama daug hibridinių formų."
        ></Product>
      ))}
    </div>
  );
}

export default FlowerList;
