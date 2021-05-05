import React, { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "Context/GlobalState.js";
import AccountLoginPopup from "AcountPopups/AccountLoginPopup";
function Header({ title }) {
  const { loginInfo, updateLoginInfo } = useContext(GlobalContext);
  const [loginPopupActive, setLoginPopupActive] = useState(false);
  const loginButton = () => {
    if (loginInfo.loggedIn) {
      return (
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
      );
    } else {
      return (
        <Button
          className="login-button"
          onClick={() => {
            setLoginPopupActive(true);
          }}
        >
          Prisijungti
        </Button>
      );
    }
  };
  return (
    <header>
      <Container className="header-container" fluid>
        {loginButton()}
        <Row className="nav-title">{title}</Row>
        <Row className="header-buttons-container">
          <Nav.Link href="/" className="btn btn-primary">
            Home
          </Nav.Link>
          <Nav.Link href="/Cart" className="btn btn-primary">
            Basket
          </Nav.Link>
        </Row>
        <AccountLoginPopup
          popupActive={loginPopupActive}
          setpopupActive={setLoginPopupActive}
        />
      </Container>
    </header>
  );
}

export default Header;
