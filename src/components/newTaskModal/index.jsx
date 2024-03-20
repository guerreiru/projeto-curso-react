import PropTypes from "prop-types";
import { useState } from "react";
import { Heading } from "../heading";
import { Input } from "../input";
import { ModalOverlay } from "./style";
import { PaperPlaneRight } from "@phosphor-icons/react";
export function NewTaskModal({ isOpen, onClose, onAddTask }) {
  const [task, setTask] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();
    const success = onAddTask({ id: Date.now(), name: task, completed: false });

    if (success) {
      setTask("");
    }
  };

  const handleInputChange = (event) => {
    const task = event.target.value;

    setTask(task);
  };

  const handleModalClick = (event) => {
    // Impede a propagação do evento de clique para evitar fechar o modal ao clicar dentro dele
    event.stopPropagation();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <div className="modal" onClick={handleModalClick}>
        <Heading fontSize="20px">Nova Tarefa</Heading>
        <div className="form">
          <Input
            type="text"
            id="name"
            value={task}
            onChange={handleInputChange}
            required
            placeholder="Nome da Tarefa"
          />

          <div className="modal-buttons" onClick={handleAddTask}>
            <PaperPlaneRight size={24} />
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
}

NewTaskModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onAddTask: PropTypes.func,
};
