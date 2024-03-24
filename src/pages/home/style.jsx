import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Header = styled.header`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    position: relative;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .img-wrapper {
    display: grid;
    justify-content: center;
  }

  footer {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 600px;
  margin: 16px auto 0;
  padding-bottom: 24px;

  .tasks-list {
    overflow-x: auto;
    margin: 20px 0;
  }

  p:last-child {
    margin-top: 10px;
  }

  .tasks-list-wrapper {
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const NoData = styled.div`
  text-align: center;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 48px;
  background-color: ${theme.colors.darkSilverGray};
  padding: 16px;
  border-radius: 4px;
  z-index: 3;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    li {
      cursor: pointer;
      &:hover {
        filter: brightness(0.7);
      }
    }

    @media (max-width: 768px) {
      row-gap: 16px;
    }
  }
`;
