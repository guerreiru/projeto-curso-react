import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    padding: 20px;
    border-radius: 8px;
    background-color: ${theme.colors.darkSilverGray};
    border-radius: 16px;

    h2 {
      margin-top: 0;
    }

    .form {
      display: flex;
      flex-direction: column;
      margin-top: 16px;
    }

    input {
      padding: 5px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    label {
      margin-bottom: 5px;
    }

    .modal-buttons {
      align-self: flex-end;
      margin-top: 10px;
      color: ${theme.colors.primaryPurple};
      cursor: pointer;
      width: fit-content;
    }

    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;
