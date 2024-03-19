import styled from "styled-components";

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
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    h2 {
      margin-top: 0;
    }

    form {
      display: flex;
      flex-direction: column;
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
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      button {
        padding: 8px 15px;
        border: none;
        border-radius: 3px;
        cursor: pointer;

        &:nth-child(1) {
          background-color: #ccc;
        }

        &:nth-child(2) {
          background-color: #007bff;
          color: white;
        }
      }
    }
  }
`;
