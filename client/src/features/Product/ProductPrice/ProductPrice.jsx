import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/helpers';
import {
  StyledColumn,
  StyledDiscount,
  StyledOriginalPrice,
  StyledPrice,
  StyledProductPrice,
} from './ProductPrice.styled';

export default function ProductPrice({ price, discount, originalPrice }) {
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
}
ProductPrice.propTypes = {
  price: PropTypes.number,
  discount: PropTypes.number,
  originalPrice: PropTypes.number,
};

ProductPrice.defaultProps = {
  price: 125,
  discount: 50,
  originalPrice: 250,
};
