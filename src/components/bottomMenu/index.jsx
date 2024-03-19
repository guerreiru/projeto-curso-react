import { House, User, Plus } from "@phosphor-icons/react";
import { Container, NewTaskButton } from "./style";
import PropTypes from "prop-types";

export function BottomMenu({ onClickNewTask }) {
  function handleOnClickNewTask() {
    onClickNewTask();
  }

  return (
    <Container>
      <ul>
        <li>
          <House size={24} weight="fill" />
          Home
        </li>
        <li>
          <NewTaskButton onClick={handleOnClickNewTask}>
            <Plus size={24} />
          </NewTaskButton>
        </li>
        <li>
          <User size={24} />
          Perfil
        </li>
      </ul>
    </Container>
  );
}

BottomMenu.propTypes = {
  onClickNewTask: PropTypes.func,
};
