import React, { useEffect } from "react";
import ShoppingCartTable from "./ShoppingCartTable";
import ShoppingCartNote from "./ShoppingCartNote";
import ShoppingCartTotalField from "./ShoppingCartTotalField";
import { Row, Container, Col } from "react-bootstrap";
import {} from "react-bootstrap/Container";

function ShoppingCartPage({ updateHeaderTitle }) {
  useEffect(() => {
    updateHeaderTitle("Pirkinių krepšelis");
  }, []);

  return (
    <>
      <div className="fixed-full-screen bacround-image"></div>
      <div className="fixed-full-screen backround-color"></div>
      <div className="basket-content">
        <Container fluid>
          <Row>
            <ShoppingCartTable />
          </Row>
          <Row>
            <ShoppingCartTotalField />
          </Row>
          <Row>
            <ShoppingCartNote />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ShoppingCartPage;
