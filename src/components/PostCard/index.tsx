import * as S from './styles';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { LuLink } from 'react-icons/lu';

interface PostCardProps {
  author: string;
  date: string;
  title: string;
  description: string;
}

function PostCard({ author, date, title, description }: PostCardProps) {
  return (
    <S.Container>
      <S.Divider />
      <S.PostHeader>
        <div>
          <S.AuthorTitle>{author}</S.AuthorTitle>
          <S.PostDate>{date}</S.PostDate>
        </div>
        <S.SocialShare>
          <div>
            <FaTwitterSquare />
          </div>
          <div>
            <FaLinkedin />
          </div>
          <div>
            <LuLink />
          </div>
        </S.SocialShare>
      </S.PostHeader>
      <div>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>
      </div>
    </S.Container>
  );
}

export default PostCard;
