import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../styles/theme";

const StyledText = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color || theme.colors.white900};
`;

export function Text({
  fontSize = "16px",
  children,
  color = `${theme.colors.white900}`,
  ...props
}) {
  return (
    <StyledText fontSize={fontSize} color={color} {...props}>
      {children}
    </StyledText>
  );
}

Text.propTypes = {
  fontSize: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
};
