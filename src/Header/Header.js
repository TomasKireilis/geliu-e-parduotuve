import React, { useContext, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "Context/GlobalState.js";
import AccountLoginPopup from "AcountPopups/AccountLoginPopup";
import { Col } from "react-bootstrap";
import { checkCurrentUserRole } from "Service/FlowerService";
function Header({ title }) {
  const { loginInfo, updateLoginInfo } = useContext(GlobalContext);
  const [loginPopupActive, setLoginPopupActive] = useState(false);
  const [userType, setUserType] = useState("anomymous");

  useEffect(async () => {
    setUserType(
      await checkCurrentUserRole({
        loggedIn: loginInfo.loggedIn,
        email: loginInfo.email,
        password: loginInfo.password,
      })
    );
  }, [loginInfo]);

  const loginButton = () => {
    if (loginInfo.loggedIn) {
      return (
        <>
          <Row
            style={{
              justifyContent: "flex-end",
            }}
          >
            <Button
              className="login-button"
              onClick={() => {
                if (loginInfo.persistent) {
                  loginInfo.loggedIn = false;
                  updateLoginInfo(loginInfo);
                } else {
                  updateLoginInfo({});
                }
              }}
            >
              Atsijungti
            </Button>
          </Row>
          <Row>
            <div className="login-name">{loginInfo.email}</div>
          </Row>
        </>
      );
    } else {
      return (
        <Row
          style={{
            justifyContent: "flex-end",
          }}
        >
          <Button
            className="login-button"
            onClick={() => {
              setLoginPopupActive(true);
            }}
          >
            Prisijungti
          </Button>
        </Row>
      );
    }
  };
  return (
    <Container className="header-container" fluid>
      <Row style={{ width: "100vw", height: "100%" }}>
        <Col style={{ maxWidth: "fit-content" }}>
          <div className="nav-title"> {title} </div>
        </Col>
        <Col style={{ maxWidth: "fit-content" }}>
          <Row className="header-buttons-container">
            <Nav.Link href="/" className="btn btn-primary">
              Produkcija
            </Nav.Link>
            <Nav.Link href="/Cart" className="btn btn-primary">
              Pirkini?? krep??elis
            </Nav.Link>

            {loginInfo.loggedIn && (
              <Nav.Link href="/OrderHistory" className="btn btn-primary">
                Pirkim?? istorija
              </Nav.Link>
            )}
            {userType == "admin" && (
              <Nav.Link href="/IntegrationService" className="btn btn-primary">
                Integracinis servisas
              </Nav.Link>
            )}
          </Row>
        </Col>
        <Col
          style={{
            maxWidth: "fit-content",
            alignSelf: "flex-start",
            margin: "0.2vw",
          }}
        >
          {loginButton()}
        </Col>
      </Row>

      <AccountLoginPopup
        popupActive={loginPopupActive}
        setpopupActive={setLoginPopupActive}
      />
    </Container>
  );
}

export default Header;
