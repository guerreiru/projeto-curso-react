import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.nav`
  background-color: ${theme.colors.darkSilverGray};
  padding: 12px 20px 24px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    position: relative;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 8px;
      font-size: 12px;
    }
  }
`;

export const NewTaskButton = styled.div`
  background-color: ${theme.colors.primaryPurple};
  border: none;
  padding: 16px;
  border-radius: 50%;
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.colors.white900};
  width: 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    filter: brightness(0.6);
  }
`;
