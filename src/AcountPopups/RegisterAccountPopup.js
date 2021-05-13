import React, { useState, useContext, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { VerticallyCenteredModal } from "../Modals/VerticallyCenteredModal";
import Button from "react-bootstrap/Button";
import {postUser} from "../Service/RegistrationService";

function RegisterAccountPopup({ popupActive, setpopupActive }) {
  const [registrationData, setRegistrationData] = useState({
    persistent: "true",
  });
  const [regButtonActive, setRegButtonActive] = useState(true);
  const [passLabelColour, setPassLabelColour] = useState({colour:"black"});
  const registerAccount = () => {
    let data = JSON.stringify({
      "username": registrationData.email,
      "password": registrationData.password,
      "fullName": registrationData.fullName,
      "address": registrationData.address,
      "phoneNumber": registrationData.phoneNumber});
    console.log(data);
    postUser(data);
    //TO DO IMPLEMENT CALL TO BACK
  };

function check() {
    let setActive = true;
     if (registrationData.email && registrationData.checkPassword &&
         registrationData.fullName && registrationData.phoneNumber &&
         registrationData.password != null) {
         setActive = false;
     }
     if (registrationData.password ==
         registrationData.checkPassword) {
       passLabelColour.colour = "green";
       setPassLabelColour(passLabelColour);
     }
     else
     {
     passLabelColour.colour = "red";
     setPassLabelColour(passLabelColour);
     setActive = true;
     }
     setRegButtonActive(setActive);
  }

  return (
    <VerticallyCenteredModal
      show={popupActive}
      onHide={() => setpopupActive(false)}
      style={{ zIndex: 100 }}
    >
      <Container className="account-registration-popup"
        fluid
        style={{ backgroundColor: "rgba(248, 248, 255, 1)" }}
      >
        <Row style={{ fontSize: "2em", marginLeft: "0px" }}>
          <img className="account-login-icon" src={"LoginIcon.png"}></img>
          Registracija
        </Row>
        <Row>
          <Form className="account-registration-form">
            <Form.Group>
              <Form.Label id="email">Elektroninio pašto adresas</Form.Label>
              <Form.Control type="text" placeholder="pavyzdys@pastas.lt"
                onChange={(event) => {
                  registrationData.email = event.target.value;
                  setRegistrationData(registrationData);
                  check();
                }}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Slaptažodis</Form.Label>
              <Form.Control id = "password" type="password" placeholder=""
                onChange={(event) => {
                  registrationData.password = event.target.value;
                  setRegistrationData(registrationData);
                  check();
                }}/>
            </Form.Group>
            <Form.Group>
              <Form.Label style={{colour:passLabelColour.colour}}>Patvirtinti slaptažodį
              </Form.Label>
              <Form.Control type="password" placeholder=""
                onChange={(event) => {
                  registrationData.checkPassword = event.target.value;
                  setRegistrationData(registrationData);
                  check();
                }}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Vardas Pavardė</Form.Label>
              <Form.Control type="text" placeholder="Vardenis Pavardenis"
                onChange={(event) => {
                  registrationData.fullName = event.target.value;
                  setRegistrationData(registrationData);
                  check();
                }}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Adresas</Form.Label>
              <Form.Control type="text" placeholder="Pvz: Uogų g. 16 Vilnius"
                onChange={(event) => {
                registrationData.address = event.target.value;
                setRegistrationData(registrationData);
                check();
              }}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tel. numeris</Form.Label>
              <Form.Control type="tel" placeholder="+3706*******"
                onChange={(event) => {
                registrationData.phoneNumber = event.target.value;
                setRegistrationData(registrationData);
                check();
              }}/>
            </Form.Group>
          </Form>
        </Row>
        <Form className="account-registration-button-form">
          <Button id= "registrationButton" variant="primary" disabled={regButtonActive}
                  onClick={() => {
                    registerAccount();
                  }}>
            Registruotis
          </Button>
        </Form>
      </Container>

    </VerticallyCenteredModal>
  );
}
export default RegisterAccountPopup;
