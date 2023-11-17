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
  const {
    cart,
    checkoutCart,
    isLoading: cartLoading,
    setIsLoading: setCartLoading,
  } = useCart();

  const checkout = async () => {
    await checkoutCart();
    setCartLoading(false);
  };

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
              text={cartLoading ? 'loading' : 'Checkout'}
              variant='checkout'
              title='checkout cart'
              onClick={checkout}
              disabled={cartLoading}
              isLoading={cartLoading}
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
