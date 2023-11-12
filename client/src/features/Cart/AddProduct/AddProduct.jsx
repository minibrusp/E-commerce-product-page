import styled from 'styled-components';
import Button from '../../../ui/Button/Button';

import IconMinus from '../../../assets/images/icon-minus.svg';
import IconPlus from '../../../assets/images/icon-plus.svg';
import IconCart from '../../../assets/images/icon-cart.svg';
import { useState } from 'react';

const StyledAddProduct = styled.div`
  padding: 1.3125rem 1.5625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const StyledQuantityNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  background-color: var(--neutral-light-grayish-blue);
  border-radius: 7px;
  padding: 7.5px;
`;

const StyledQuantity = styled.span`
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  padding: 10px 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  text-align: center;
  border: transparent;
  background-color: transparent;
`;

export default function AddProduct() {
  const [quantity, setQuantity] = useState(0);

  const clickQuantityHandler = (e) => {
    switch (e.target.closest('button').name) {
      case 'minus': {
        if (quantity === 0) break;
        setQuantity((prev) => prev - 1);
        break;
      }
      case 'plus': {
        setQuantity((prev) => prev + 1);
        break;
      }
    }
  };

  const clickAddCart = () => console.log(`Cart Submit quantity = ${quantity}`);

  return (
    <StyledAddProduct>
      <StyledQuantityNav>
        <Button
          as='image'
          icon={IconMinus}
          onClick={clickQuantityHandler}
          variant='cartQuantity'
          name='minus'
          title='subtract quantity'
        />
        <StyledQuantity>{quantity}</StyledQuantity>
        <Button
          as='image'
          icon={IconPlus}
          onClick={clickQuantityHandler}
          variant='cartQuantity'
          name='plus'
          title='add more quantity'
        />
      </StyledQuantityNav>
      <Button
        text='Add to cart'
        variant='addCart'
        icon={IconCart}
        onClick={clickAddCart}
      />
    </StyledAddProduct>
  );
}
