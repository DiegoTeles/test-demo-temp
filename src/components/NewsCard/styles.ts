import styled from 'styled-components';

export const LastNews = styled.div`
  grid-column: 10 / 10;
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 30px 20px;
  padding: 22px;
  background-color: #f4f4fa;
  border-radius: 8px;
  width: 270px;
  height: fit-content;
`;
export const Title = styled.h1`
  font-size: 24px;
  color: #18191e;
  font-weight: 600;
  margin: 0;
`;

export const CardLink = styled.a`
  text-transform: none;
  color: #18191e;
  transition: color 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    color: #18191e;
  }
`;

export const CardNews = styled.div`
  border: 1px solid #cdcddf;
  border-radius: 4px;
  padding: 10px;

  h1 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }

  span {
    color: #e04c85;
    font-size: 14px;
    font-weight: 600;
  }
`;
