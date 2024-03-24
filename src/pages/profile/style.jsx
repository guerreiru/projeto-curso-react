import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  text-align: center;
  padding-top: 16px;
  position: relative;
  height: 100%;

  .imgWrapper {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0 10px;
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const TasksInfo = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  .task {
    padding: 16px 32px;
    background-color: ${theme.colors.darkSilverGray};
    border-radius: 4px;
    min-width: 192px;
  }
`;
