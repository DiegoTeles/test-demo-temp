import * as S from './styles';

interface NewsCardProps {
  id: number;
  title: string;
  date: string;
}

function NewsCard({ lastPosts }: { lastPosts: NewsCardProps[] }) {
  return (
    <>
      <S.Title>Últimas notícias</S.Title>
      {lastPosts.map((post: NewsCardProps) => (
        <a href='/' key={post.id}>
          <S.CardNews>
            <h1>{post.title}</h1>
            <span>{post.date}</span>
          </S.CardNews>
        </a>
      ))}
    </>
  );
}

export default NewsCard;
