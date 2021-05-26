import React, { useState, useContext } from "react";
import { VerticallyCenteredModal } from "Modals/VerticallyCenteredModal.js";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ToastNotification from "MainContent/ToastNotification.js";
import { GlobalContext } from "Context/GlobalState.js";

function Product(props) {
  const [popupAcive, setpopupAcive] = useState(false);
  const [toastActive, settoastActive] = useState(false);
  const { updateCart } = useContext(GlobalContext);

  const addToCart = () => {
    const itemToAdd = {
      id: props.id,
      image: props.imgSrc,
      title: props.title,
      price: props.price,
      amount: 1,
    };
    updateCart(itemToAdd);
    onShowAlert();
  };

  const onShowAlert = () => {
    settoastActive(true);
    window.setTimeout(() => {
      settoastActive(false);
    }, 2000);
  };

  const AddToBasketPopup = () => {
    if (props.amount > 0 || props.amount == -1) {
      return (
        <Button className="product-popup-button" onClick={() => addToCart()}>
          Įdėti į krepšelį
        </Button>
      );
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
      {toastActive && (
        <ToastNotification
          text="Prekė pridėta į krepšelį"
          label="success"
          isOpen={toastActive}
        />
      )}
      <div className="product-container" onClick={() => setpopupAcive(true)}>
        <img
          className="product-image"
          src={props.imgSrc}
          onError={(e) => {
            e.target.onError = null;
            e.target.src = "No_Image_Available.jpg";
          }}
        ></img>

        <div className="product-title">{props.title}</div>
        <div>{props.price} €</div>
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
              <Col style={{ fontSize: "2.5em", marginLeft: "10px" }}>
                <Row>{props.title}</Row>
                <Row className="product-info">{props.info}</Row>
                <Row>
                  <div className="product-popup-price">{props.price} €</div>
                </Row>
                {props.amount >= 0 && (
                  <Row>
                    <div className="product-popup-amount">
                      Prekės likutis: {props.amount}
                    </div>
                  </Row>
                )}
              </Col>
              <Col xs="10" style={{ maxWidth: "400px" }}>
                <Row>
                  <img
                    className="product-popup-image"
                    src={props.imgSrc}
                    onError={(e) => {
                      e.target.onError = null;
                      e.target.src = "No_Image_Available.jpg";
                    }}
                  ></img>
                  {AddToBasketPopup()}
                </Row>
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
