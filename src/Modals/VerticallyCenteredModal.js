import Modal from "react-bootstrap/Modal";
import "./VerticallyCenteredModal.css";

// use example setModalShow yra useState hookas
{
  /* <VerticallyCenteredModal
show={trrue}  
onHide={() => setModalShow([false])}
>
<input
  type="image"
  src={modalShow[1]}
></input>
</VerticallyCenteredModal> */
}
export function VerticallyCenteredModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      dialogClassName="modal-60w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.children}
    </Modal>
  );
}
