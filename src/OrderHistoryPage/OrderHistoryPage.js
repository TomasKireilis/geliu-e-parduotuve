import React, { useEffect } from "react";
import OrderHistoryTable from "./OrderHistoryTable";
import { Row, Container, Col } from "react-bootstrap";

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
