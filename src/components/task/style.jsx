import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  background-color: ${theme.colors.darkSilverGray};
  padding: 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  .completed {
    text-decoration: line-through;
  }
`;

export const InputWrapper = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    display: inline-block;
    cursor: pointer;
    background-color: ${theme.colors.darkSilverGray};
    border-radius: 50%;
    width: 12px;
    height: 12px;
    border: 1px solid ${theme.colors.white900};
  }

  input[type="checkbox"]:checked + label {
    background-color: ${theme.colors.primaryPurple};
    color: white;
  }
`;
