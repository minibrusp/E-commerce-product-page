import PropTypes from 'prop-types';
import ImageThumbnails from '../ImageThumbnails';
import ProductImage from '../ProductImage';
import styled from 'styled-components';
import ImageGalleryNav from '../ImageGalleryNav';

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const StyledProductImage = styled.div``;

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
