import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  position: relative;

  h2 {
    margin: 42px 0 48px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  footer {
    position: absolute;
    bottom: 32px;
    text-align: center;
    width: calc(100% - 48px);

    p {
      color: ${theme.colors.mediumGray};
    }

    a {
      color: ${theme.colors.white900};
      text-decoration: none;
    }
  }
`;
