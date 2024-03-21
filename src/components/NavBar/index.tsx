import * as S from './styles';
import Logo from '../../assets/logo-allowme-news.png';

function NavBar() {
  return (
    <S.Container>
      <img src={Logo} alt='Logo Allow Me News' />
    </S.Container>
  );
}

export default NavBar;
