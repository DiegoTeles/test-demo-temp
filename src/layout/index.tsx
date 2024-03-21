import { ComponentType } from 'react';
import * as S from './styles';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const withLayout = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> =>
  function WithLayoutComponent(props: P) {
    return (
      <>
        <NavBar />
        <S.Container>
          <WrappedComponent {...props} />
        </S.Container>
        <Footer />
      </>
    );
  };

export default withLayout;
