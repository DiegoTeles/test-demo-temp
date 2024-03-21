import * as S from './styles';
import Logo from '../../assets/logo-allowme-news-gray.png';

function Footer() {
  return (
    <S.Container>
      <S.Content>
        <img src={Logo} alt='Logo Allow Me News' />
        <p>Copyright © 2023 AllowMe News. Todos os direitos reservados</p>
      </S.Content>
    </S.Container>
  );
}

export default Footer;
