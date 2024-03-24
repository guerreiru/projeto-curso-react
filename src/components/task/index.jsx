import PropTypes from "prop-types";
import { Container, Icon, InputWrapper } from "./style";
import { Trash } from "@phosphor-icons/react";
import { theme } from "../../styles/theme";
import { useState } from "react";
import { ConfirmationModal } from "../confirmationModal";

export function Task({ task, onComplete, onDelete }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleCheckboxChange() {
    onComplete(task.id);
  }

  function handleOnDelete() {
    onDelete(task.id);
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <Container>
      <InputWrapper>
        <input
          type="checkbox"
          id={task.id}
          value={task.name}
          onChange={handleCheckboxChange}
          checked={task.completed}
        />
        <label htmlFor={task.id}></label>

        <span className={task.completed ? "completed" : ""}>{task.name}</span>
      </InputWrapper>

      <Icon onClick={openModal}>
        <Trash size={16} weight="bold" color={theme.colors.danger} />
      </Icon>

      <ConfirmationModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onConfirmation={handleOnDelete}
      />
    </Container>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
