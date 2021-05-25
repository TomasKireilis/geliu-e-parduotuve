import React, { useEffect } from "react";
import ShoppingCartTable from "../ShoppingCartPage/ShoppingCartTable";
import ShoppingCartNote from "../ShoppingCartPage/ShoppingCartNote";
import ShoppingCartTotalField from "../ShoppingCartPage/ShoppingCartTotalField";
import { Row, Container, Col, Button, Nav } from "react-bootstrap";
import ShoppingCartOrderButton from "../ShoppingCartPage/ShoppingCartOrderButton";
import IntegrationServiceBuyTable from "./IntegrationServiceBuyTable";

function IntegrationServicePage({ updateHeaderTitle }) {
  useEffect(() => {
    updateHeaderTitle("Integracinis servisas");
  }, []);

  return (
    <>
      <div className="basket-content">
        <Container fluid>
          <Row>
            <Col style={{ maxWidth: "100%" }}>
              <Row
                className="header-buttons-container"
                style={{ marginTop: "5px" }}
              >
                <Button className="login-button">Prekių užsakymas</Button>
              </Row>
            </Col>
          </Row>
          {/* <div className="page-not-available">
            <Row>
              <div className="development-title">
                This page is being developed. Come back soon to see new
                features.
              </div>
            </Row>
            <Row>
              <img
                className="under-development--img--inner absolute-center "
                src="UnderDevelopmentInnerPart.png"
              />

              <img
                className="under-development-img-outer"
                src="UnderDevelopmentOuterPart.png"
              />
            </Row>
          </div> */}
          <Row>
            <IntegrationServiceBuyTable />
          </Row>
          <Row>
            <Button className="order-button">Užsakyti</Button>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default IntegrationServicePage;
