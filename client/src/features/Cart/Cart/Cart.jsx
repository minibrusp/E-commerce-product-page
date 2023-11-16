import {
  StyledCart,
  StyledCartEmptyText,
  StyledCartItems,
  StyledHeading,
} from './Cart.styled';

import Button from '../../../ui/Button/';
import CartItem from '../CartItem/';
import useCart from '../useCart';

function Cart() {
  const { cart, checkoutCart } = useCart();

  const checkout = async () => await checkoutCart();

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
              onClick={checkout}
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
