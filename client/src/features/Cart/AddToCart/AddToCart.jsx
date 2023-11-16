import PropTypes from 'prop-types';

import { useState } from 'react';

import Button from '../../../ui/Button';

import IconMinus from '../../../assets/images/icon-minus.svg';
import IconPlus from '../../../assets/images/icon-plus.svg';
import IconCart from '../../../assets/images/icon-cart.svg';
import {
  StyledAddToCart,
  StyledQuantity,
  StyledQuantityNav,
} from './AddToCart.styled';

export default function AddToCart({ addToCart }) {
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

  const clickAddCart = () => {
    if (!quantity) return;
    addToCart(quantity);
    setQuantity(0);
  };

  return (
    <StyledAddToCart>
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
    </StyledAddToCart>
  );
}

AddToCart.propTypes = {
  addToCart: PropTypes.func,
};
