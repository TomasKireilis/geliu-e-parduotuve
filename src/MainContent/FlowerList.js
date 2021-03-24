import Product from "MainContent/Product";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import FlowerListFilters from "./FlowerListFilters";

function FlowerList() {
  const data = [
    { imgSrc: "flowersIcon.jpg", name: "Palergonija", info: "info" },
    { imgSrc: "flowersIcon.jpg", name: "Litva", info: "info" },
    { imgSrc: "flowersIcon.jpg", name: "Lietuva", info: "info" },
    { imgSrc: "flowersIcon.jpg", name: "Papa", info: "info" },
  ];

  const [filteredFlowerList, setFilteredFlowerList] = useState(data);
  const handleChange = (event) => {
    setFilteredFlowerList(
      data.filter((x) =>
        x.name.toLowerCase().match(event.target.value.toLowerCase())
      )
    );
  };
  return (
    <Col>
      <Row>
        <FlowerListFilters handleChange={handleChange} />
      </Row>
      <Row>
        <div className="flower-list">
          {filteredFlowerList.map((item, index) => (
            <Product
              key={index}
              imgSrc={item.imgSrc}
              title={item.name}
              info={item.info}
            ></Product>
          ))}
        </div>
      </Row>
    </Col>
  );
}

export default FlowerList;
