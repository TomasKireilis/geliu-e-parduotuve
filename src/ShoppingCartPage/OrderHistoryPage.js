import React, { useEffect } from "react";
import OrderHistoryTable from "./OrderHistoryTable";
import ShoppingCartNote from "./ShoppingCartNote";
import ShoppingCartTotalField from "./ShoppingCartTotalField";
import { Row, Container, Col } from "react-bootstrap";
import {} from "react-bootstrap/Container";
import ShoppingCartOrderButton from "./ShoppingCartOrderButton";

function OrderHistoryPage({ updateHeaderTitle }) {
  useEffect(() => {
    updateHeaderTitle("Pirkimų istorija");
  }, []);

  return (
    <>
      <div className="basket-content">
        <Container fluid>
          <Row>
            <OrderHistoryTable />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default OrderHistoryPage;
