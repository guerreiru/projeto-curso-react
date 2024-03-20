import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SkipButtonWrapper = styled.div`
  padding: 16px 24px;
  cursor: pointer;
`;

export const Header = styled.header`
  padding: 0 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-direction: column;
  flex: 1;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px;

  @media (max-width: 768px) {
    flex: 1;
  }

  margin-bottom: 42px;

  button {
    width: 100%;
    max-width: 600px;
  }
`;
