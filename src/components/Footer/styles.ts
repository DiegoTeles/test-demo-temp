import styled from 'styled-components';

export const Container = styled.footer`
  padding: 14px 20px;
  background-color: #ececf4;
`;

export const Content = styled.div`
  @media (max-width: 750px) {
    flex-direction: column;
    text-align: center;

    div {
      margin-top: 10px;
      display: grid;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 40px;
  }
  span {
    font-size: 16px;
    color: #58595d;
  }
`;
