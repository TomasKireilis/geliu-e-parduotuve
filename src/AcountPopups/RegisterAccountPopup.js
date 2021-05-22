import React, { useState, useContext, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { VerticallyCenteredModal } from "../Modals/VerticallyCenteredModal";
import Button from "react-bootstrap/Button";
import { postUser } from "../Service/RegistrationService";
import ToastNotification from "../MainContent/ToastNotification";

function RegisterAccountPopup({ popupActive, setpopupActive }) {
  const [registrationData, setRegistrationData] = useState({});
  const [regButtonActive, setRegButtonActive] = useState(true);
  const [toast, setToast] = useState("");
  const [labelState, setLabelState] = useState("");
  const passComp = React.useRef(null);
  const [toastActive, setToastActive] = useState(false);
  const registerAccount = async() => {
    let data = {
      username: registrationData.email,
      password: registrationData.password,
      fullName: registrationData.fullName,
      address: registrationData.address,
      phoneNumber: registrationData.phoneNumber,
    };
    let response = await postUser(data);
    onShowAlert(response);
  };

  function check() {
    let setActive = true;
    if (
      registrationData.email &&
      registrationData.checkPassword &&
      registrationData.fullName &&
      registrationData.phoneNumber &&
      registrationData.password != null
    ) {
      setActive = false;
    }

    if (
      registrationData.password == registrationData.checkPassword &&
      registrationData.password?.length > 7 &&
      registrationData.password != undefined
    ) {
      passComp.current.innerHTML = "Slaptažodis tinkamas!";
      passComp.current.style.color = "green";
    }

    if (
      registrationData.password != registrationData.checkPassword ||
      registrationData.password?.length !=
        registrationData.checkPassword?.length
    ) {
      passComp.current.innerHTML = "Slaptažodžiai nesutampa!";
      passComp.current.style.color = "red";
      setActive = true;
    }

    if (registrationData.password?.length < 7) {
      passComp.current.innerHTML = "Slaptažodis per trumpas!";
      passComp.current.style.color = "red";
      setActive = true;
    }
    setRegButtonActive(setActive);
  }

  const onShowAlert = (response) => {
    if (response == "201")
    {
      let label = "success";
      setLabelState(label);
      let text = "Registracija sėkminga!";
      setToast(text);
      setpopupActive(false);
      setToastActive(true);
      window.setTimeout(() => {
        setToastActive(false);
      }, 2000);
    }
    else if (response == "499")
    {
      let label = "danger";
      setLabelState(label);
      let text = "Kažkas nepavyko. Bandykite dar kartą";
      setToast(text);
      setToastActive(true);
      window.setTimeout(() => {
        setToastActive(false);
      }, 3000);
    }
    else
    {
      let label = "danger";
      setLabelState(label);
      let text = "Netinkami registracijos duomenys";
      setToast(text);
      setToastActive(true);
      window.setTimeout(() => {
        setToastActive(false);
      }, 3000);
    }
  };
  return (
    <>
      {toastActive && (
        <ToastNotification
          text={toast}
          label={labelState}
          isOpen={toastActive}
          style={{zIndex: 200000}}
        />
      )}
      {popupActive && (
        <VerticallyCenteredModal
          show={popupActive}
          onHide={() => setpopupActive(false)}
          style={{ zIndex: 100 }}
        >
          <Container
            className="account-registration-popup"
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
                  <Form.Control
                    type="text"
                    placeholder="pavyzdys@pastas.lt"
                    onChange={(event) => {
                      registrationData.email = event.target.value;
                      setRegistrationData(registrationData);
                      check();
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Slaptažodis</Form.Label>
                  <Form.Control
                    id="password"
                    type="password"
                    placeholder=""
                    onChange={(event) => {
                      registrationData.password = event.target.value;
                      setRegistrationData(registrationData);
                      check();
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label ref={passComp}>Patvirtinti slaptažodį</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder=""
                    onChange={(event) => {
                      registrationData.checkPassword = event.target.value;
                      setRegistrationData(registrationData);
                      check();
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Vardas Pavardė</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Vardenis Pavardenis"
                    onChange={(event) => {
                      registrationData.fullName = event.target.value;
                      setRegistrationData(registrationData);
                      check();
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Adresas</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Pvz: Uogų g. 16 Vilnius"
                    onChange={(event) => {
                      registrationData.address = event.target.value;
                      setRegistrationData(registrationData);
                      check();
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Tel. numeris</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="+3706*******"
                    onChange={(event) => {
                      registrationData.phoneNumber = event.target.value;
                      setRegistrationData(registrationData);
                      check();
                    }}
                  />
                </Form.Group>
              </Form>
            </Row>
            <Form className="account-registration-button-form">
              <Button
                id="registrationButton"
                variant="primary"
                disabled={regButtonActive}
                onClick={() => {
                  registerAccount();
                }}
              >
                Registruotis
              </Button>
            </Form>
          </Container>
        </VerticallyCenteredModal>
      )}
    </>
  );
}
export default RegisterAccountPopup;
