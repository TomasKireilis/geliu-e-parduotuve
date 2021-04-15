import React, { useState } from "react";
import { VerticallyCenteredModal } from "Modals/VerticallyCenteredModal.js";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Product(props) {
  const [popupAcive, setpopupAcive] = useState(false);

  const AddToBasketPopup = () => {
    if (props.amount > 0) {
      return <Button className="product-popup-button">Įdėti į krepšelį</Button>;
    } else {
      return (
        <Button className="product-popup-button inactive" disabled={true}>
          Nėra sandėlyje
        </Button>
      );
    }
  };
  return (
    <>
      <div className="product-container" onClick={() => setpopupAcive(true)}>
        <img className="product-image" src={props.imgSrc}></img>
        <div className="product-title">{props.title}</div>
      </div>
      {popupAcive && (
        <VerticallyCenteredModal
          show={popupAcive}
          onHide={() => setpopupAcive(false)}
        >
          <Container
            fluid
            style={{ backgroundColor: "rgba(248, 248, 255, 1)" }}
          >
            <Row>
              <Col style={{ fontSize: "2em", marginLeft: "10px" }}>
                <Row style={{ fontSize: "1.5em" }}>{props.title}</Row>
                <Row>{props.info}</Row>
                <Row>
                  <div className="product-popup-price">{props.price} €</div>
                </Row>
              </Col>
              <Col xs="4">
                <Row>
                  <img className="product-popup-image" src={props.imgSrc}></img>
                </Row>
                <Row>{AddToBasketPopup()}</Row>
              </Col>
            </Row>
            <Row></Row>
          </Container>
        </VerticallyCenteredModal>
      )}
    </>
  );
}

export default Product;
