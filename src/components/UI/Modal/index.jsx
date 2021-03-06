import React from "react";
import { Modal, Button } from "react-bootstrap";

function NewModal(props) {
  const { modalTitle, children, show, handleClose, size, buttons, onSubmit } = props;
  return (
    <Modal size={size} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {buttons ? (
          buttons.map((btn, index) => (
            <Button key={index} variant={btn.color} onClick={btn.onClick}>
              {btn.label}
            </Button>
          ))
        ) : (
          <Button
            variant="primary"
            {...props}
            style={{backgroundColor: '#333'}}
            className="btn-sm"
            onClick={onSubmit}
          >
            Save
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default NewModal;
