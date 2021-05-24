import React, { useState, useContext, useEffect } from "react";
import { VerticallyCenteredModal } from "Modals/VerticallyCenteredModal.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GlobalContext } from "Context/GlobalState.js";
import ToastNotification from "MainContent/ToastNotification.js";
import RegisterAccount from "./RegisterAccount.js";
import { checkIfUserExist } from "Service/RegistrationService.js";

function AccountLoginPopup({ popupActive, setpopupActive }) {
  const { loginInfo, updateLoginInfo } = useContext(GlobalContext);
  const [toast, setToast] = useState("");
  const [labelState, setLabelState] = useState("");
  const [loginData, setLoginData] = useState(
    loginInfo ?? { persistent: "true" }
  );

  const [toastActive, setToastActive] = useState(false);

  const loginToAccount = async () => {
    let response = await checkIfUserExist({
      username: loginInfo.email,
      password: loginInfo.password,
    });
    if (response == "true") {
      loginData.loggedIn = true;
      updateLoginInfo(loginData);
    }
    console.log(response);

    onShowAlert(response);
  };
  useEffect(() => {
    if (loginInfo.email) setLoginData(loginInfo);
  }, [loginInfo]);

  const onShowAlert = (response) => {
    if (response == "true") {
      let label = "success";
      setLabelState(label);
      let text = "Prisijungta sėkmingai!";
      setToast(text);
    } else if (response == "499") {
      let label = "danger";
      setLabelState(label);
      let text = "Kažkas nepavyko. Bandykite dar kartą";
      setToast(text);
    } else {
      let label = "danger";
      setLabelState(label);
      let text = "Netinkami registracijos duomenys";
      setToast(text);
    }
    setToastActive(true);
    if (response == "true") {
      setpopupActive(false);
    }
    window.setTimeout(() => {
      setToastActive(false);
    }, 2000);
  };
  return (
    <>
      {toastActive && (
        <ToastNotification
          text={toast}
          label={labelState}
          isOpen={toastActive}
        />
      )}
      {popupActive && (
        <VerticallyCenteredModal
          show={popupActive}
          onHide={() => setpopupActive(false)}
        >
          <Container
            className="account-login-popup"
            fluid
            style={{ backgroundColor: "rgba(248, 248, 255, 1)" }}
          >
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
                    placeholder={loginData.email ?? "Įveskite el-paštą"}
                    onChange={(event) => {
                      loginData.email = event.target.value;

                      setLoginData(loginData);
                    }}
                  />
                  <Form.Text className="text-muted">
                    Mes niekada nebendrinsime jūsų el. pašto
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Slaptažodis</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Įveskite slaptažodį"
                    defaultValue={loginData.password}
                    onChange={(event) => {
                      loginData.password = event.target.value;

                      setLoginData(loginData);
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Išsaugoti prisijungimo duomenis"
                    defaultChecked={loginData.persistent ?? "true"}
                    onChange={(event) => {
                      loginData.persistent = event.target.checked;
                      setLoginData(loginData);
                    }}
                  />
                </Form.Group>
                <div className="acount-login-form-button-container">
                  <Button
                    className="acount-login-form-button"
                    variant="primary"
                    onClick={() => {
                      loginToAccount();
                    }}
                  >
                    Prisijungti
                  </Button>
                </div>
              </Form>
            </Row>
            <Row>
              <RegisterAccount />
            </Row>
          </Container>
        </VerticallyCenteredModal>
      )}
    </>
  );
}

export default AccountLoginPopup;
