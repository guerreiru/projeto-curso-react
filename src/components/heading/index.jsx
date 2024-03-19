import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeading = styled.div`
  font-size: ${({ fontSize }) => fontSize};
`;

export function Heading({ tag = "h2", fontSize = "32px", children, ...props }) {
  return (
    <StyledHeading as={tag} fontSize={fontSize} {...props}>
      {children}
    </StyledHeading>
  );
}

Heading.propTypes = {
  fontSize: PropTypes.string,
  tag: PropTypes.string,
  children: PropTypes.node,
};
