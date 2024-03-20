import PropTypes from "prop-types";
import { Container, InputWrapper } from "./style";

export function Task({ task, onComplete }) {
  const handleCheckboxChange = () => {
    onComplete(task.id);
  };

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
      </InputWrapper>

      <span className={task.completed ? "completed" : ""}>{task.name}</span>
    </Container>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
};
