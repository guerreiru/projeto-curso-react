import PropTypes from "prop-types";
import { DropdownContainer } from "./style";

export function Dropdown({ onClick }) {
  function handleOnClick(value) {
    onClick(value);
  }

  return (
    <DropdownContainer>
      <ul>
        <li onClick={() => handleOnClick({ label: "todas", value: "all" })}>
          Todas
        </li>
        <li
          onClick={() =>
            handleOnClick({ label: "completadas", value: "completed" })
          }
        >
          Completadas
        </li>
        <li
          onClick={() =>
            handleOnClick({ label: "não completadas", value: "not_completed" })
          }
        >
          Não Completadas
        </li>
      </ul>
    </DropdownContainer>
  );
}

Dropdown.propTypes = {
  onClick: PropTypes.func.isRequired,
};
