import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledInput = styled.input`
  padding: 16px;
  background-color: ${theme.colors.charcoalGray};
  border-radius: 4px;
  border: 1px solid ${theme.colors.mediumGray};
  color: white;
  width: 100%;

  &::placeholder {
    color: ${theme.colors.darkCharcoalGray};
  }
`;

export const InputLabel = styled.label`
  margin-bottom: 8px;
  display: block;
`;

export const InputWrapper = styled.div`
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
`;
