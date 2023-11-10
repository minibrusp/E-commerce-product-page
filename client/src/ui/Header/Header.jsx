import { HeaderCol, StyledHeader } from './Header.styled';
import Burger from '../Burger';
import Logo from '../Logo';
import Nav from '../Nav';
import Modal from '../Modal/Modal';

export default function Header() {
  return (
    <StyledHeader>
      <HeaderCol>
        {/* <Burger open={isBurgerOpen} onClick={setIsBurgerOpen} /> */}
        <Modal variation='burgerNav'>
          <Modal.Open opens='burger-menu'>
            <Burger />
          </Modal.Open>
          <Modal.Window name='burger-menu'>
            <Nav />
          </Modal.Window>
        </Modal>
        <Logo />
      </HeaderCol>
      <HeaderCol>
        <div>Cart</div>
        <div>Profile</div>
      </HeaderCol>
    </StyledHeader>
  );
}
