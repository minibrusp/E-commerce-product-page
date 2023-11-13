import { useContext, useMemo } from 'react';
import CartIcon from '../../../assets/images/icon-cart.svg';

import MenuIcon from '../../../ui/MenuIcon/MenuIcon';
import { StyledCartButtonIcon, StyledCounter } from './CartButtonIcon.styled';
import { MenusContext } from '../../../ui/Menus/Menus';
import { useSelector } from 'react-redux';

export default function CartButtonIcon() {
  const { cart } = useSelector((store) => store.cart);
  const { openName } = useContext(MenusContext);
  const count = useMemo(() => {
    return cart.length;
  }, [cart]);
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
