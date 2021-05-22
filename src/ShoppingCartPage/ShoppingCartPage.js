import React, { useEffect } from "react";
import ShoppingCartTable from "./ShoppingCartTable";
import ShoppingCartNote from "./ShoppingCartNote";
import ShoppingCartTotalField from "./ShoppingCartTotalField";
import { Row, Container, Col } from "react-bootstrap";
import {} from "react-bootstrap/Container";
import ShoppingCartOrderButton from "./ShoppingCartOrderButton";

function ShoppingCartPage({ updateHeaderTitle }) {
  useEffect(() => {
    updateHeaderTitle("Pirkinių krepšelis");
  }, []);

  return (
    <>
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
          <Row>
            <ShoppingCartOrderButton />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ShoppingCartPage;
