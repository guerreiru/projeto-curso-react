import PropTypes from "prop-types";
import {
  Container,
  IconWrapper,
  InputLabel,
  InputWrapper,
  StyledInput,
} from "./style";

export function Input({ label, id, fullWidth, icon, ...props }) {
  return (
    <Container $fullWidth={fullWidth}>
      {label && (
        <InputLabel htmlFor={id} $fullWidth={fullWidth}>
          {label}
        </InputLabel>
      )}
      <InputWrapper>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <StyledInput {...props} id={id} $withIcon={icon} />
      </InputWrapper>
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  icon: PropTypes.node,
};
