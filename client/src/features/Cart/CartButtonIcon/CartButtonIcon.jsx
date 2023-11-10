import CartIcon from '../../../assets/images/icon-cart.svg';

import MenuIcon from '../../../ui/MenuIcon/MenuIcon';
import { StyledCartButtonIcon, StyledCounter } from './CartButtonIcon.styled';

export default function CartButtonIcon() {
  const count = 5;
  return (
    <StyledCartButtonIcon>
      {count > 0 && <StyledCounter>{count}</StyledCounter>}
      <MenuIcon as='svg' src={CartIcon} alt='cart icon' variant='cart' />
    </StyledCartButtonIcon>
  );
}
