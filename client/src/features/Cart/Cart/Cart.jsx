import ImgProductThumb1 from '../../../assets/images/image-product-1-thumbnail.jpg';
import IconDelete from '../../../assets/images/icon-delete.svg';
import {
  StyledCart,
  StyledCartEmptyText,
  StyledCartItem,
  StyledCartItemImg,
  StyledCartItems,
  StyledDescription,
  StyledHeading,
  StyledPrice,
  StyledTitle,
} from './Cart.styled';
import Button from '../../../ui/Button/Button';

function Cart() {
  const cart = [1111111, '123213213'];
  // const cart = [];

  return (
    <StyledCart>
      <StyledHeading>Cart</StyledHeading>
      <StyledCartItems>
        {cart.length > 0 ? (
          <>
            <StyledCartItem>
              <StyledCartItemImg src={ImgProductThumb1} alt='item photo' />
              <StyledDescription>
                <StyledTitle>Fall Limited Edition Sneakers</StyledTitle>
                <StyledTitle>
                  $125.00 x 3 <StyledPrice>$375.00</StyledPrice>
                </StyledTitle>
              </StyledDescription>
              <Button
                icon={IconDelete}
                as='svg'
                alt='delete icon'
                title='delete cart item'
              />
            </StyledCartItem>
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
