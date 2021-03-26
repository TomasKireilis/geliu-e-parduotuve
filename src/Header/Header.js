import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
function Header({ title }) {
  return (
    <header>
      <Container className="header-container" fluid>
        <div className="nav-title">{title}</div>
        <Row className="header-buttons-container">
          <Nav.Link href="/" className="btn btn-primary">
            Home
          </Nav.Link>
          <Nav.Link href="/Cart" className="btn btn-primary">
            Basket
          </Nav.Link>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
