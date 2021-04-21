import React, {useContext, useState} from "react";
import { GlobalContext } from "Context/GlobalState.js";
import Button from "react-bootstrap/Button";
import {VerticallyCenteredModal} from "../Modals/VerticallyCenteredModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Form} from "react-bootstrap";

function ShoppingCartOrderButton(props) {
    const [popupAcive, setpopupAcive] = useState(false);

    return (
        <>
            <Button className="order-button" onClick={() => setpopupAcive(true)}>
                Užsakyti
            </Button>
            {popupAcive && (
                <VerticallyCenteredModal
                    show={popupAcive}
                    onHide={() => setpopupAcive(false)}
                >
                    <Form className="order-form">
                        <Form.Group controlId="formAddress">
                            <Form.Label>Pristatymo adresas</Form.Label>
                            <Form.Control type="text" placeholder="Įveskite adresą" />
                        </Form.Group>

                        <Form.Group controlId="formPhoneNo">
                            <Form.Label>Telefono numeris</Form.Label>
                            <Form.Control type="text" placeholder="+37060000000" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formName">
                                <Form.Label>Vardas</Form.Label>
                                <Form.Control type="text" placeholder="Įveskite vardą" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formSurname">
                                <Form.Label>Pavardė</Form.Label>
                                <Form.Control type="text" placeholder="Įveskite pavardę" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="order-button">
                            <Button type="submit">
                                Patvirtinti
                            </Button>
                        </Form.Row>
                    </Form>
                </VerticallyCenteredModal>
            )}
        </>
    );
}

export default ShoppingCartOrderButton;
