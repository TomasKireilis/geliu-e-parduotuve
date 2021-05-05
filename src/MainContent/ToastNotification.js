import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { BsCheckCircle } from "react-icons/bs";

function ToastNotification() {
  return (
    <div className="toast-notification">
      <Alert variant="success">
        <Alert.Heading><BsCheckCircle size={30} /> Prekė pridėta į krepšelį </Alert.Heading>
      </Alert>
    </div>
  );
}

export default ToastNotification;
