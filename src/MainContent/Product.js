import React, { useState } from "react";
import { VerticallyCenteredModal } from "Modals/VerticallyCenteredModal.js";
function Product(props) {
  const [popupAcive, setpopupAcive] = useState(false);
  return (
    <>
      <div className="product-container" onClick={() => setpopupAcive(true)}>
        <img className="product-image" src={props.imgSrc}></img>
        <div className="product-title">{props.title}</div>
      </div>
      {popupAcive && (
        <VerticallyCenteredModal
          show={popupAcive}
          onHide={() => setpopupAcive(false)}
        >
          <img className="product-popup-image" src={props.imgSrc}></img>
        </VerticallyCenteredModal>
      )}
    </>
  );
}

export default Product;
