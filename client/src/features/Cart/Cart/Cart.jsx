import { useSelector } from 'react-redux';

import {
  StyledCart,
  StyledCartEmptyText,
  StyledCartItems,
  StyledHeading,
} from './Cart.styled';

import Button from '../../../ui/Button/';
import CartItem from '../CartItem/';

function Cart() {
  const { cart } = useSelector((store) => store.cart);

  return (
    <StyledCart>
      <StyledHeading>Cart</StyledHeading>
      <StyledCartItems>
        {cart.length > 0 ? (
          <>
            {cart.map((product) => (
              <CartItem key={product.id} {...product} />
            ))}

            <Button
              text='Checkout'
              variant='checkout'
              title='checkout cart'
              onClick={() => console.log('Cart Checkout Button Clicked!!!')}
            />
          </>
        ) : (
          <StyledCartEmptyText>Your cart is empty.</StyledCartEmptyText>
        )}
      </StyledCartItems>
    </StyledCart>
  );
}

export default Cart;
