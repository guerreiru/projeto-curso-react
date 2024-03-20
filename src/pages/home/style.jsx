import styled from "styled-components";

export const Header = styled.header`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    .tasks-list {
      overflow-x: auto;
    }

    p:last-child {
      margin-top: 10px;
    }

    padding-bottom: 40px;
  }

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

export const NoData = styled.div`
  text-align: center;
`;
