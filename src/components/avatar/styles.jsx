import styled from "styled-components";

export const Container = styled.div`
  width: ${({ $size }) => $size || "42px"};
  height: ${({ $size }) => $size || "42px"};
  display: flex;
  align-items: center;
  justify-content: center;

  &,
  img {
    border-radius: 50%;
  }
`;
