import PropTypes from "prop-types";
import { InputLabel, InputWrapper, StyledInput } from "./style";

export function Input({ label, id, fullWidth, ...props }) {
  return (
    <InputWrapper $fullWidth={fullWidth}>
      {label && (
        <InputLabel htmlFor={id} $fullWidth={fullWidth}>
          {label}
        </InputLabel>
      )}
      <StyledInput {...props} id={id} />
    </InputWrapper>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};
