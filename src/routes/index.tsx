import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { RoutesEnum } from './routes';
import HomeWithLayout from '../pages/Home';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Home} element={<HomeWithLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
