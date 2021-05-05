import React, { useState } from "react";
import { VerticallyCenteredModal } from "Modals/VerticallyCenteredModal.js";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function AccountLoginPopup({ popupAcive, setpopupAcive }) {
  const [loginData, setLoginData] = useState({});
  const loginToAccount = (event) => {
    console.log(loginData);
  };

  return (
    <VerticallyCenteredModal
      show={popupAcive}
      onHide={() => setpopupAcive(false)}
    >
      <Container fluid style={{ backgroundColor: "rgba(248, 248, 255, 1)" }}>
        <Row style={{ fontSize: "2em", marginLeft: "0px" }}>
          <img className="account-login-icon" src={"LoginIcon.png"}></img>
          Prisijungti
        </Row>
        <Row>
          <Form className="account-login-form">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>El-paštas</Form.Label>
              <Form.Control
                type="email"
                placeholder="Įveskite el-paštą"
                onChange={(event) => {
                  loginData.email = event.target.value;
                  setLoginData(loginData);
                }}
              />
              <Form.Text className="text-muted">
                Mes niekada nebendrinsime jūsų el. Pašto
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Slaptažodis</Form.Label>
              <Form.Control
                type="password"
                placeholder="Įveskite slaptažodį"
                onChange={(event) => {
                  loginData.password = event.target.value;
                  setLoginData(loginData);
                }}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => {
                loginToAccount();
              }}
            >
              Prisijungti
            </Button>
          </Form>
        </Row>
        <Row>
          <button class="create-account-btn blue">Sukurti naują paskyrą</button>
        </Row>
      </Container>
    </VerticallyCenteredModal>
  );
}

export default AccountLoginPopup;
