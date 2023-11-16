import PropTypes from 'prop-types';

import ImageThumbnails from '../ImageThumbnails';
import ProductImage from '../ProductImage';
import ImageGalleryNav from '../ImageGalleryNav';

import { StyledProductImage, StyledRow } from './Lightbox.styled';

export default function Lightbox({
  selected,
  photos,
  thumbnails,
  variation,
  handleClick,
}) {
  return (
    <StyledRow>
      <StyledProductImage>
        <ProductImage src={photos[selected]} variation={variation} />
        <ImageGalleryNav variant={variation} handleClick={handleClick} />
      </StyledProductImage>
      <ImageThumbnails
        thumbnails={thumbnails}
        selected={selected}
        variation={variation}
      />
    </StyledRow>
  );
}

Lightbox.propTypes = {
  selected: PropTypes.number,
  photos: PropTypes.arrayOf(PropTypes.string),
  thumbnails: PropTypes.arrayOf(PropTypes.string),
  variation: PropTypes.string,
  handleClick: PropTypes.func,
};
