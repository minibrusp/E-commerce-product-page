import { memo } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/helpers';
import {
  StyledColumn,
  StyledDiscount,
  StyledOriginalPrice,
  StyledPrice,
  StyledProductPrice,
} from './ProductPrice.styled';

const ProductPrice = memo(function MainProductPrice({
  price,
  discount,
  originalPrice,
}) {
  return (
    <StyledProductPrice>
      <StyledColumn>
        <StyledPrice>{formatPrice(price, 'USD', 'en-US')}</StyledPrice>
        <StyledDiscount>{discount}%</StyledDiscount>
      </StyledColumn>
      <StyledColumn>
        <StyledOriginalPrice>
          {formatPrice(originalPrice, 'USD', 'en-US')}
        </StyledOriginalPrice>
      </StyledColumn>
    </StyledProductPrice>
  );
});
ProductPrice.propTypes = {
  price: PropTypes.number,
  discount: PropTypes.number,
  originalPrice: PropTypes.number,
};

ProductPrice.defaultProps = {
  price: 0,
  discount: 0,
  originalPrice: 0,
};

export default ProductPrice;
