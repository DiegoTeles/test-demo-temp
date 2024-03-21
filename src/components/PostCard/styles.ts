import styled from 'styled-components';

export const SocialShare = styled.div`
  display: flex;
  gap: 14px;

  svg {
    color: #58595d;
    font-size: 20px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #e04c85;
    }
  }
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.hr`
  margin: 30px 0;
  border: 1px solid #dbdbea;
`;

export const Container = styled.div`
  padding: 0 20px ;
`;

export const AuthorTitle = styled.h1`
  color: #e04c85;
  font-size: 16px;
  margin-bottom: 0;
  text-transform: uppercase;
`;

export const PostDate = styled.span`
  color: #58595d;
  font-size: 14px;
  font-weight: 600;
`;

export const PostTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
`;

export const PostDescription = styled.p`
  color: #58595d;
  font-size: 16px;
  line-height: 32px;
  margin-top: 24px;
`;
