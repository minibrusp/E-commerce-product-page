import PropTypes from 'prop-types';
import { StyledProductImage } from './ProductImage.styled';

export default function ProductImage({ src, alt, variation, onClick }) {
  return (
    <StyledProductImage
      src={src}
      alt={alt}
      $variation={variation}
      onClick={onClick}
    />
  );
}

ProductImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  variation: PropTypes.string,
  onClick: PropTypes.func,
};

ProductImage.defaultProps = {
  alt: 'Product Image',
  variation: 'Default',
};
