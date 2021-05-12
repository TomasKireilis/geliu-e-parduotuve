import React, { useState, useContext, useEffect } from "react";
import { VerticallyCenteredModal } from "Modals/VerticallyCenteredModal.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GlobalContext } from "Context/GlobalState.js";
import ToastNotification from "MainContent/ToastNotification.js";

function AccountLoginPopup({ popupActive, setpopupActive }) {
  const { loginInfo, updateLoginInfo } = useContext(GlobalContext);
  const [loginData, setLoginData] = useState(
    loginInfo ?? { persistent: "true" }
  );
  const [toastActive, setToastActive] = useState(false);

  const loginToAccount = () => {
    //TODO create check if account exist
    loginData.loggedIn = true;
    updateLoginInfo(loginData);
    onShowAlert();
  };
  useEffect(() => {
    if (loginInfo.email) setLoginData(loginInfo);
  }, [loginInfo]);
  const onShowAlert = () => {
    setToastActive(true);
    setpopupActive(false);
    window.setTimeout(() => {
      setToastActive(false);
    }, 2000);
  };

  return (
    <>
      {toastActive && (
        <ToastNotification
          text={`Prisijungta sėkmingai. Sveiki ${loginData.email}`}
          label="success"
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
              <button className="create-account-btn blue">
                Sukurti naują paskyrą
              </button>
            </Row>
          </Container>
        </VerticallyCenteredModal>
      )}
    </>
  );
}

export default AccountLoginPopup;
