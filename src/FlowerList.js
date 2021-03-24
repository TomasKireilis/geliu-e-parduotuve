import Product from "MainContent/Product";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

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
    <>
      <Form className="flower-list-filter">
        <Row>
          <Col>
            <Form.Control placeholder="Ieškoti vardo" onChange={handleChange} />
          </Col>
        </Row>
      </Form>
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
    </>
  );
}

export default FlowerList;
