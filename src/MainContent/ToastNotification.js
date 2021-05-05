import React from "react";
import Alert from "react-bootstrap/Alert";
import { BsCheckCircle } from "react-icons/bs";

function ToastNotification({ text, label }) {
  return (
    <div className="toast-notification">
      <Alert variant={label}>
        <Alert.Heading>
          <BsCheckCircle size={30} /> {text}
        </Alert.Heading>
      </Alert>
    </div>
  );
}

export default ToastNotification;
