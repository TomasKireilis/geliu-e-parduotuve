import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import FlowerList from "MainContent/FlowerList.js";

function MainScreen() {
  return (
    <Container fluid>
      <Row>
        <FlowerList></FlowerList>
      </Row>
    </Container>
  );
}

export default MainScreen;
