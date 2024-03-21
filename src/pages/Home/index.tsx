import * as S from './styles';
import withLayout from '../../layout';
import DropList from '../../components/DropList';
import NewsCard from '../../components/NewsCard';
import PostCard from '../../components/PostCard';

type Option = {
  label: string;
  value: string;
};

/* SUBSTITUIR POR CHAMADA REST */
const authorOptions: Option[] = [
  { label: 'Opção 1', value: 'option1' },
  { label: 'Opção 2', value: 'option2' },
  { label: 'Opção 3', value: 'option3' },
];

const dateOptions: Option[] = [
  { label: 'Mais recentes', value: 'ASC' },
  { label: 'Mais antigos', value: 'DESC' },
];

const postData = [
  {
    id: 2,
    author: 'SOPHIE HAWK',
    date: '17/01/2018',
    title: 'Sang lose of hour then he left find',
    description:
      'Unpleasant nor diminution excellence apartments imprudence the met new. Draw part them he an to he roof only. Music leave say doors him. Tore bred form if sigh case as do. Staying he no looking if do opinion. Sentiments way understood end partiality and his. No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had.',
  },
  {
    id: 2,
    author: 'NICHOLAS JORDAN',
    date: '20/03/2018',
    title: 'AssCo has revamped the theory of versioning',
    description:
      'We will mesh the buzzword "strategic". Our feature set is unparalleled, but our subscriber-defined CAE and non-complex configuration is invariably considered a remarkable achievement. What does the commonly-used commonly-used term "strategic" really mean? Think ultra-long-term. The reporting factor can be summed up in one word: B2B2C. Think clicks-and-mortar. We believe we know that it is better to enhance compellingly than to monetize dynamically. Think real-time, backward-compatible. The ability to synergize macro-holistically leads to the capability to envisioneer holistically. The implementation factor can be summed up in one word: six-sigma.',
  },
];

const lastPosts = [
  {
    id: 1,
    title: 'Sang lose of hour then he left find',
    date: '17/01/2018',
  },
  {
    id: 2,
    title: 'AssCo has revamped the theory of versioning',
    date: '20/03/2018',
  },
];

function Home() {
  const handleSelectAuthor = (value: string) => {
    console.log('Opção selecionada:', value);
  };

  const handleSelectDate = (value: string) => {
    console.log('Opção selecionada:', value);
  };

  return (
    <>
      <S.FilterContainer>
        <DropList
          options={authorOptions}
          labelForAll='Todos os autores'
          onSelect={handleSelectAuthor}
          filterTitle='Filtrar por autor'
        />
        <DropList
          options={dateOptions}
          onSelect={handleSelectDate}
          includeAllOption={false}
          filterTitle='Ordenar por'
        />
      </S.FilterContainer>

      <S.ArticleContainer>
        <S.Articles>
          {postData.map((post) => (
            <PostCard
              key={post.id}
              author={post.author}
              date={post.date}
              title={post.title}
              description={post.description}
            />
          ))}
        </S.Articles>
        <S.LastNews>
          <NewsCard lastPosts={lastPosts} />
        </S.LastNews>
      </S.ArticleContainer>
    </>
  );
}

const HomeWithLayout = withLayout(Home);
export default HomeWithLayout;
