import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface FunctionProp {
  handleClose(): void;
  showSuccessMessage: boolean;
}

const ModalComponent = (props: FunctionProp) => {
  return (
    <div>
      <Modal show={props.showSuccessMessage} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your account created successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
