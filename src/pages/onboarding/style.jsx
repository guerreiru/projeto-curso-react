import styled from "styled-components";
import { theme } from "../../styles/theme";

function handleActive(active) {
  return active ? theme.colors.white900 : "#AFAFAF";
}

export const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SkipButtonWrapper = styled.div`
  width: 120px;
`;

export const StepWrapper = styled.div`
  padding: 0 24px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  width: 213px;
  height: 277px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const StepDescription = styled.div`
  text-align: center;
  color: ${theme.colors.white900};
`;

export const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  padding: 16px 24px;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const StepIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 42px 0;
`;

export const Indicator = styled.div`
  width: 24px;
  height: 4px;
  border-radius: 16px;
  background-color: ${({ $active }) => handleActive($active)};
`;
