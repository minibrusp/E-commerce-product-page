import { Outlet } from 'react-router-dom';

import { Section, StyledAppLayout } from './AppLayout.styled';

import Header from '../Header';
import Footer from '../Footer/Footer';

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Section>
        <Outlet />
      </Section>
      <Footer />
    </StyledAppLayout>
  );
}
