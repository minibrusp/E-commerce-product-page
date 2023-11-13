import { useState } from 'react';

import Button from '../../../ui/Button/Button';

import IconMinus from '../../../assets/images/icon-minus.svg';
import IconPlus from '../../../assets/images/icon-plus.svg';
import IconCart from '../../../assets/images/icon-cart.svg';
import {
  StyledAddProduct,
  StyledQuantity,
  StyledQuantityNav,
} from './AddProduct.styled';

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
