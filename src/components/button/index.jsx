import PropTypes from "prop-types";
import { StyledButton } from "./styles";

export function Button({ children, variant = "primary", disabled, ...props }) {
  return (
    <StyledButton $variant={variant} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};
