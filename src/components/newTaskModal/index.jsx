import PropTypes from "prop-types";
import { useState } from "react";

import { ModalOverlay } from "./style"; // Arquivo de estilos para o modal

export function NewTaskModal({ isOpen, onClose, onAddTask }) {
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(taskName);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <div className="modal">
        <h2>Nova Tarefa</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="taskName">Nome da Tarefa:</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={handleInputChange}
            required
          />
          <div className="modal-buttons">
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">Adicionar Tarefa</button>
          </div>
        </form>
      </div>
    </ModalOverlay>
  );
}

NewTaskModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onAddTask: PropTypes.func,
};
