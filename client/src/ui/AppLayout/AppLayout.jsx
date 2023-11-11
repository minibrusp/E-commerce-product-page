import { Outlet } from 'react-router-dom';

import { Section, StyledAppLayout } from './AppLayout.styled';

import Header from '../Header/Header';

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Section>
        <Outlet />
      </Section>
    </StyledAppLayout>
  );
}
