import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

function handleVariant(variant) {
  switch (variant) {
    case "primary":
      return css`
        background-color: ${theme.colors.primaryPurple};
        border: 1px solid ${theme.colors.primaryPurple};
      `;
    case "secondary":
      return css`
        background-color: transparent;
        border: none;
        color: ${theme.colors.white400};
      `;

    case "outline":
      return css`
        background-color: transparent;
        border: 1px solid ${theme.colors.primaryPurple};
      `;

    default:
      break;
  }
}

export const StyledButton = styled.button`
  padding: 16px 24px;
  border-radius: 4px;
  color: #fff;
  width: 100%;
  max-width: 600px;
  ${({ $variant }) => handleVariant($variant)};
`;
