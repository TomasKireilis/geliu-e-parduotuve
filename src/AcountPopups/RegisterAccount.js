import React, { useContext, useState } from "react";
import RegisterAccountPopup from "./RegisterAccountPopup.js";

function RegisterAccount() {
  const [registrationPopupActive, setRegistrationPopupActive] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setRegistrationPopupActive(true);
        }}
        className="create-account-btn blue"
      >
        Sukurti naują paskyrą
      </button>
      {registrationPopupActive && (
        <RegisterAccountPopup
          popupActive={registrationPopupActive}
          setpopupActive={setRegistrationPopupActive}
        />
      )}
    </>
  );
}
export default RegisterAccount;
