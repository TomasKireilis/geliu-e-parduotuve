import React, { useEffect } from "react";
import ShoppingCartTable from "../ShoppingCartPage/ShoppingCartTable";
import ShoppingCartNote from "../ShoppingCartPage/ShoppingCartNote";
import ShoppingCartTotalField from "../ShoppingCartPage/ShoppingCartTotalField";
import { Row, Container, Col, Button, Nav } from "react-bootstrap";
import ShoppingCartOrderButton from "../ShoppingCartPage/ShoppingCartOrderButton";

function IntegrationServicePage({ updateHeaderTitle }) {
  useEffect(() => {
    updateHeaderTitle("Integracinis servisas");
  }, []);

  return (
    <>
      <div className="basket-content">
        <Container fluid>
          <Row>
            <Col style={{ maxWidth: "fit-content" }}>
              <Row
                className="header-buttons-container"
                style={{ marginTop: "10px" }}
              >
                <Button className="login-button">Užsakyti prekes</Button>
              </Row>
            </Col>
          </Row>
          <div className="page-not-available">
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
              ;
              <img
                className="under-development-img-outer"
                src="UnderDevelopmentOuterPart.png"
              />
              ;
            </Row>
          </div>
          <Row>
            <ShoppingCartTable />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default IntegrationServicePage;
