import Product from "MainContent/Product";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import FlowerListFilters from "./FlowerListFilters";

function FlowerList() {
  const data = [
    {
      imgSrc: "flowersIcon.jpg",
      name: "Palergonija",
      info: "info",
      price: 5,
      type: "flowerBouquet",
    },
    {
      imgSrc: "flowersIcon.jpg",
      name: "a",
      info: "info",
      price: 2,
      type: "flowerBouquet",
    },
    {
      imgSrc: "flowersIcon.jpg",
      name: "b",
      info: "info",
      price: 4,
      type: "flower",
    },
    {
      imgSrc: "flowersIcon.jpg",
      name: "c",
      info: "info",
      price: 15,
      type: "flower",
    },
    {
      imgSrc: "flowersIcon.jpg",
      name: "Litva",
      info: "info",
      price: 1,
      type: "flowerBouquet",
    },
    {
      imgSrc: "flowersIcon.jpg",
      name: "Lietuva",
      info: "info",
      price: 5,
      type: "flower",
    },
    {
      imgSrc: "flowersIcon.jpg",
      name: "Papa",
      info: "info",
      price: 9,
      type: "flower",
    },
  ];

  const getProductsPriceRange = () => {
    const prices = data.map((x) => x.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
  };

  const [filteredFlowerList, setFilteredFlowerList] = useState(data);

  const handleChange = (value) => {
    var filteringData = JSON.parse(JSON.stringify(data));

    if (value.name && value.name != "") {
      filteringData = filteringData.filter((x) =>
        x.name.toLowerCase().match(value.name)
      );
    }

    if (value.price) {
      filteringData = filteringData.filter(
        (x) => x.price >= value.price.min && x.price <= value.price.max
      );
    }

    if (value.type) {
      filteringData = filteringData.filter((x) => x.type === value.type);
    }

    setFilteredFlowerList(filteringData);
  };

  return (
    <Col>
      <Row>
        <FlowerListFilters
          priceRange={getProductsPriceRange}
          handleChange={handleChange}
        />
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
