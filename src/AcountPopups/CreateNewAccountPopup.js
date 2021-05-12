import React, { useState, useContext, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import {VerticallyCenteredModal} from "../Modals/VerticallyCenteredModal";
import {GlobalContext} from "../Context/GlobalState";

function RegisterAccountPopup(popupActive, setpopupActive) {
    const { registrationInfo, updateRegistrationInfo } = useContext(GlobalContext);
    const [registrationData, setRegistrationData] = useState( { persistent: "true" });

    const [registrationPopupActive, setRegistrationPopupActive] = useState(false);
    const registerAccount = () => {
        //TO DO IMPLEMENT CALL TO BACK
    }
    return (

<VerticallyCenteredModal>
<Container>
        <Row>
            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Create Password</Form.Label>
                    <Form.Control type="password" placeholder=""/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder=""/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder=""/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder=""/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder=""/>
                </Form.Group>
            </Form>
        </Row>
</Container>
</VerticallyCenteredModal>
    )
}
export default RegisterAccountPopup;