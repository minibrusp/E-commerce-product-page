import PropTypes from 'prop-types';
import { StyledImageGalleryNav } from './ImageGalleryNav.styled';
import Button from '../../../ui/Button';

import PrevNavSvg from '../../../assets/images/icon-previous.svg';
import NextNavSvg from '../../../assets/images/icon-next.svg';

export default function ImageGalleryNav({ variant, handleClick }) {
  return (
    <StyledImageGalleryNav $variant={variant}>
      <Button
        icon={PrevNavSvg}
        as='image'
        variant={variant}
        title='previous image'
        name='previous'
        onClick={handleClick}
      />
      <Button
        icon={NextNavSvg}
        as='image'
        variant={variant}
        title='next image'
        name='next'
        onClick={handleClick}
      />
    </StyledImageGalleryNav>
  );
}

ImageGalleryNav.propTypes = {
  variant: PropTypes.string,
  handleClick: PropTypes.func,
};

ImageGalleryNav.defaultProps = {
  variant: 'gallery',
};
