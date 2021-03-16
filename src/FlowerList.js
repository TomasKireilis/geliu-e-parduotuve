import React from "react";

function FlowerList() {
  const flowersArray = [...Array(50)];
  return (
    <div className="flower-list">
      {flowersArray.map((item, index) => (
        <img src="flowersIcon.jpg" />
      ))}
    </div>
  );
}

export default FlowerList;
