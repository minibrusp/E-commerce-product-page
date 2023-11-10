import styled from 'styled-components';
import ImgProductThumb1 from '../../../assets/images/image-product-1-thumbnail.jpg';
import IconDelete from '../../../assets/images/icon-delete.svg';
import MenuIcon from '../../../ui/MenuIcon/MenuIcon';

const StyledCart = styled.aside`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--neutral-white);
  border-radius: 8px;
  width: 100%;
  max-width: 360px;
  box-shadow: 0px 0px 6px 0px lightgrey;
  padding-top: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.563rem;
  text-align: left;
`;

const StyledHeading = styled.h2`
  font-size: 1rem;
  padding: 0 1.5rem;
`;

const StyledCartItems = styled.ul`
  width: 100%;
  border-top: 1px solid var(--neutral-grayish-blue);
  list-style-type: none;
  padding: 0 1.5rem;
  min-height: 190px;
`;
const StyledCartItem = styled.li`
  padding: 1.563rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
`;

const StyledCartItemImg = styled.img`
  width: 50px;
  height: 50px;
`;

const StyledButton = styled.button`
  color: var(--primary-pale-orange);
  background-color: var(--primary-orange);
  border: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  width: 100%;
  padding: 1.125rem 0;
`;

const StyledDescription = styled.div`
  line-height: 1.6;
`;

const StyledTitle = styled.p`
  color: var(--neutral-dark-grayish-blue);
`;

const StyledPrice = styled.b`
  color: var(--neutral-black);
`;

function Cart() {
  return (
    <StyledCart>
      <StyledHeading>Cart</StyledHeading>
      <StyledCartItems>
        <StyledCartItem>
          <StyledCartItemImg src={ImgProductThumb1} alt='item photo' />
          <StyledDescription>
            <StyledTitle>Fall Limited Edition Sneakers</StyledTitle>
            <StyledTitle>
              $125.00 x 3 <StyledPrice>$375.00</StyledPrice>
            </StyledTitle>
          </StyledDescription>
          <MenuIcon src={IconDelete} alt='delete icon' as='svg' />
        </StyledCartItem>
        <StyledButton>Checkout</StyledButton>
      </StyledCartItems>
    </StyledCart>
  );
}

export default Cart;
