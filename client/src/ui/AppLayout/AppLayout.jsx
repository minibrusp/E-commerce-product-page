import { Outlet } from 'react-router-dom';

import { Main, StyledAppLayout } from './AppLayout.styled';

import Header from '../Header/Header';

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}
