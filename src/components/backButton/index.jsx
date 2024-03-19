import { CaretLeft } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export function BackButton({ children, ...props }) {
  const navigate = useNavigate();

  return (
    <StyledButton onClick={() => navigate(-1)} {...props}>
      {children && children}
      {!children && <CaretLeft size={20} color="#f7f7f7" weight="bold" />}
    </StyledButton>
  );
}

BackButton.propTypes = {
  children: PropTypes.node,
};
