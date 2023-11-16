import { useContext } from 'react';
import CartIcon from '../../../assets/images/icon-cart.svg';

import MenuIcon from '../../../ui/MenuIcon/MenuIcon';
import { StyledCartButtonIcon, StyledCounter } from './CartButtonIcon.styled';
import { MenusContext } from '../../../ui/Menus/Menus';

import useCart from '../useCart';

export default function CartButtonIcon() {
  const { count } = useCart();
  const { openName } = useContext(MenusContext);

  return (
    <StyledCartButtonIcon>
      {count > 0 && <StyledCounter>{count}</StyledCounter>}
      <MenuIcon
        as='svg'
        src={CartIcon}
        alt='cart icon'
        variant='cart'
        $isCartOpen={openName !== ''}
      />
    </StyledCartButtonIcon>
  );
}
