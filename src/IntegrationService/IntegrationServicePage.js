import React, { useEffect, useState, useContext } from "react";
import { Row, Container, Col, Button, Nav } from "react-bootstrap";
import { checkCurrentUserRole } from "Service/FlowerService";
import IntegrationServiceBuyTable from "./IntegrationServiceBuyTable";
import { GlobalContext } from "Context/GlobalState.js";

function IntegrationServicePage({ updateHeaderTitle }) {
  const { loginInfo } = useContext(GlobalContext);
  const [userType, setUserType] = useState("anomymous");

  useEffect(() => {
    updateHeaderTitle("Integracinis servisas");
  }, []);

  useEffect(async () => {
    setUserType(
      await checkCurrentUserRole({
        loggedIn: loginInfo.loggedIn,
        email: loginInfo.email,
        password: loginInfo.password,
      })
    );
  }, [loginInfo]);

  const [basketPrice, setBasketPrice] = useState(0);

  return (
    <>
      <div className="basket-content">
        <Container fluid>
          <Row>
            <Col style={{ maxWidth: "100%" }}>
              <Row style={{ marginTop: "5px", marginBottom: "5px" }}>
                <Button className="login-button">Prekių užsakymas</Button>
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

              <img
                className="under-development-img-outer"
                src="UnderDevelopmentOuterPart.png"
              />
            </Row>
          </div>

          <Row>
            <IntegrationServiceBuyTable
              setBasketPrice={(value) => setBasketPrice(value)}
            />
          </Row>
          <Row>
            <div className="basket-total-container">
              Bendra suma: {basketPrice.toFixed(2)} EUR
            </div>
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
