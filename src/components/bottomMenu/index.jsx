import { House, User, Plus } from "@phosphor-icons/react";
import { Container, NewTaskButton } from "./style";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function BottomMenu({ onClickNewTask }) {
  function handleOnClickNewTask() {
    onClickNewTask();
  }

  return (
    <Container>
      <ul>
        <li>
          <Link to="/home">
            <House size={24} weight="fill" />
            Home
          </Link>
        </li>

        {onClickNewTask && (
          <li>
            <NewTaskButton onClick={handleOnClickNewTask}>
              <Plus size={24} />
            </NewTaskButton>
          </li>
        )}

        <li>
          <Link to="/profile">
            <User size={24} />
            Perfil
          </Link>
        </li>
      </ul>
    </Container>
  );
}

BottomMenu.propTypes = {
  onClickNewTask: PropTypes.func,
};
