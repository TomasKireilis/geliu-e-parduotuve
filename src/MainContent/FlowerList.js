import Product from "MainContent/Product";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import FlowerListFilters from "./FlowerListFilters";
import { getAllFlowers } from "Service/FlowerService.js";

function FlowerList() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const a = JSON.parse(JSON.stringify(await getAllFlowers()));
    setData(a);
  }, []);

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

  useEffect(async () => {
    handleChange(data);
  }, [data]);

  const getProductsPriceRange = () => {
    const prices = data.map((x) => x.price);
    if (prices && prices.length === 0) {
      return { min: 0, max: 1 };
    }
    return { min: Math.min(...prices), max: Math.max(...prices) };
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
              id={item.id}
              imgSrc={item.imgSrc}
              title={item.name}
              info={item.info}
              price={item.price}
              amount={item.amount}
            ></Product>
          ))}
        </div>
      </Row>
    </Col>
  );
}

export default FlowerList;
