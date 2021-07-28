import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface FunctionProp {
  handleClose(): void;
  showSuccessMessage: boolean;
  title: string;
  message: string;
}

const ModalComponent = (props: FunctionProp) => {
  return (
    <div>
      <Modal show={props.showSuccessMessage} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
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
