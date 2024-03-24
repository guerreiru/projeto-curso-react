import PropTypes from "prop-types";
import { useState } from "react";
import { Heading } from "../heading";
import { ModalOverlay } from "./style";

export function ConfirmationModal({ isOpen, onClose, onConfirmation }) {
  const [task, setTask] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();
    const success = onConfirmation({
      id: Date.now(),
      name: task,
      completed: false,
    });

    if (success) {
      setTask("");
    }
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <div className="modal" onClick={handleModalClick}>
        <Heading fontSize="20px">Deseja realmente remover a task?</Heading>
        <div className="modal-buttons" onClick={handleAddTask}>
          Remover
        </div>
      </div>
    </ModalOverlay>
  );
}

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirmation: PropTypes.func,
};
