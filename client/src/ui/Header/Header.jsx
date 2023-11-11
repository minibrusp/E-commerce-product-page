import { HeaderCol, StyledHeader } from './Header.styled';
import Burger from '../Burger';
import Logo from '../Logo';
import Nav from '../Nav';
import Modal from '../Modal/Modal';
import Menus from '../Menus/Menus';
import CartButtonIcon from '../../features/Cart/CartButtonIcon';
import Cart from '../../features/Cart/Cart/Cart';
import Avatar from '../Avatar';

export default function Header() {
  return (
    <StyledHeader>
      <HeaderCol>
        <Modal variation='burgerNav'>
          <Modal.Open opens='burger-menu'>
            <Burger />
          </Modal.Open>
          <Modal.Window name='burger-menu'>
            <Nav.Mobile />
          </Modal.Window>
        </Modal>
        <Logo />
      </HeaderCol>
      <HeaderCol>
        <Menus>
          <Menus.Menu>
            <Menus.Toggle opens='cart'>
              <CartButtonIcon />
            </Menus.Toggle>
            <Menus.Item name='cart'>
              <Cart />
            </Menus.Item>
          </Menus.Menu>
          {/* <Menus.Menu>
            <Menus.Toggle opens='profile'>
              <MenuIcon src={AvatarImg} alt='avatar' variant='avatar' />
            </Menus.Toggle>
            <Menus.Item name='profile'>
              <div>Login</div>
            </Menus.Item>
          </Menus.Menu> */}
          <Avatar />
        </Menus>
      </HeaderCol>
    </StyledHeader>
  );
}
