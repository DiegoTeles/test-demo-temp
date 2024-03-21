import * as S from './styles';
import Logo from '../../assets/logo-allowme-news-gray.png';

function Footer() {
  return (
    <S.Container>
      <S.Content>
        <img src={Logo} alt='Logo Allow Me News' />
        <div>
          <span>Copyright © 2023 AllowMe News. </span>
          <span>Todos os direitos reservados</span>
        </div>
      </S.Content>
    </S.Container>
  );
}

export default Footer;
