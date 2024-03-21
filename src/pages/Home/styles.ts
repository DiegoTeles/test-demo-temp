import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 20px 0;
`;

export const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

export const Articles = styled.div`
  grid-column: 1 / 10;

  @media (max-width: 750px) {
    grid-column: 1 / 11;
  }
`;

export const LastNews = styled.div`
  @media (max-width: 750px) {
    grid-column: 1 / 9;
    width: 100%;
  }
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
