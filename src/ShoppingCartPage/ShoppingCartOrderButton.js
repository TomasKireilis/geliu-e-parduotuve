import React, { useContext, useState } from "react";
import { GlobalContext } from "Context/GlobalState.js";
import Button from "react-bootstrap/Button";
import { VerticallyCenteredModal } from "../Modals/VerticallyCenteredModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import { postOrder } from "Service/FlowerService";
import ToastNotification from "MainContent/ToastNotification.js";
import ShoppingCartRow from "./ShoppingCartRow";

function ShoppingCartOrderButton(props) {
  const { cartItems, cartNote,loginInfo, deleteItem, updateTotal, deleteNote } = useContext(GlobalContext);


  const [orderResponse, setOrderResponse] = useState("");

  const [toastNotificationText, setToastNotificationText] = useState(
    "Kažkas nepavyko. Bandykite dar kartą"
  );

  const [toastActive, setToastActive] = useState(false);
  const [popupActive, setpopupActive] = useState(false);

  const [formData, setformData] = useState({
    basket: { items: cartItems },
    greetingMessage: cartNote,
  });

  const placeOrder = async (data) => {
    let response = await postOrder(data, {
      loggedIn: loginInfo.loggedIn,
      email: loginInfo.email,
      password: loginInfo.password,
    });
    if (response == "201") {
      cartItems.map((item) => (
          deleteItem(item.id)
      ))
      updateTotal()
      deleteNote()
      setToastNotificationText("Užsakymas priimtas");
    } else {
      setToastNotificationText("Kažkas nepavyko. Bandykite dar kartą");
    }
    setOrderResponse(response);
    onShowAlert(response);
  };

  const onShowAlert = (response) => {
    if (response == "201") setpopupActive(false);
    setToastActive(true);
    window.setTimeout(() => {
      setToastActive(false);
    }, 2000);
  };

  return (
    <>
      <Button className="order-button" onClick={() => setpopupActive(true)}>
        Užsakyti
      </Button>

      {toastActive && (
        <ToastNotification
          text={toastNotificationText}
          label={orderResponse == "201" ? "success" : "danger"}
          isOpen={toastActive}
        />
      )}

      {popupActive && (
        <VerticallyCenteredModal
          show={popupActive}
          onHide={() => setpopupActive(false)}
        >
          <Form className="order-form">
            <Form.Group controlId="formAddress">
              <Form.Label>Pristatymo adresas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Įveskite adresą"
                onChange={(e) => {
                  formData.shippingAddress = e.target.value;
                  setformData(formData);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNo">
              <Form.Label>Telefono numeris</Form.Label>
              <Form.Control
                type="text"
                placeholder="+37060000000"
                onChange={(e) => {
                  formData.phone = e.target.value;
                  setformData(formData);
                }}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formName">
                <Form.Label>Vardas</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Įveskite vardą"
                  onChange={(e) => {
                    formData.name = e.target.value;
                    setformData(formData);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formSurname">
                <Form.Label>Pavardė</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Įveskite pavardę"
                  onChange={(e) => {
                    formData.surname = e.target.value;
                    setformData(formData);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Button
              className="order-button"
              onClick={(e) => {
                formData.greetingMessage = cartNote;
                formData.basket = { items: cartItems };
                setformData(formData);
                placeOrder(formData);
              }}
            >
              Patvirtinti
            </Button>
          </Form>
        </VerticallyCenteredModal>
      )}
    </>
  );
}

export default ShoppingCartOrderButton;
