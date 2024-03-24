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

    .modal-buttons {
      text-align: right;
      margin-top: 10px;
      color: ${theme.colors.primaryPurple};
      cursor: pointer;
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;
