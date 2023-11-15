import PropTypes from 'prop-types';
import { useMemo } from 'react';

import {
  StyledCartItem,
  StyledColumn,
  StyledCartItemImg,
  StyledDescription,
  StyledPrice,
  StyledTotalPrice,
  StyledTitle,
} from './CartItem.styled';
import Button from '../../../ui/Button/';

import { formatPrice } from '../../../utils/helpers';

import IconDelete from '../../../assets/images/icon-delete.svg';

import { deleteCartItem } from '../cartSlice';
import { useDispatch } from 'react-redux';

export default function CartItem({ id, image, name, price, quantity }) {
  const dispatch = useDispatch();

  const totalPrice = useMemo(() => {
    const calculatedPrice = quantity > 1 ? price * quantity : price;
    return calculatedPrice;
  }, [price, quantity]);

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteCartItem(id));
  };

  return (
    <StyledCartItem key={id}>
      <StyledColumn>
        <StyledCartItemImg src={image} alt={`photo thumbnail of ${name}`} />
        <StyledDescription>
          <StyledTitle>{name}</StyledTitle>
          <StyledPrice>
            {quantity > 1 && (
              <>
                <span>{formatPrice(price, 'USD', 'en-US')}</span>
                <span>x {quantity}&nbsp;</span>
              </>
            )}
            <StyledTotalPrice>
              {formatPrice(totalPrice, 'USD', 'en-US')}
            </StyledTotalPrice>
          </StyledPrice>
        </StyledDescription>
      </StyledColumn>
      <Button
        icon={IconDelete}
        as='svg'
        alt='delete icon'
        title={`delete cart item # ${id}`}
        onClick={handleDelete}
      />
    </StyledCartItem>
  );
}

CartItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
