import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import {
  StyledGalleryNavContainer,
  StyledImageGallery,
  StyledProductImage,
} from './MobileImageGallery.styled';

import Button from '../../../ui/Button/Button';

import PrevNavSvg from '../../../assets/images/icon-previous.svg';
import NextNavSvg from '../../../assets/images/icon-next.svg';
import { useMemo } from 'react';

// const productImage = [ProductImage1, ProductImage2, ProductImage3];

export default function MobileImageGallery({ images }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = Number(searchParams.get('selected')) || 0;

  const { photos } = images;

  const MAX_IMAGES = useMemo(() => {
    return photos.length - 1 || 0;
  }, [photos]);

  const handleClick = (e) => {
    switch (e.target.closest('button').name) {
      case 'next': {
        if (MAX_IMAGES === selected) {
          searchParams.set('selected', 0);
          setSearchParams(searchParams);
          break;
        }
        searchParams.set('selected', selected + 1);
        setSearchParams(searchParams);
        break;
      }
      case 'previous': {
        if (selected === 0) {
          searchParams.set('selected', MAX_IMAGES);
          setSearchParams(searchParams);
          break;
        }
        searchParams.set('selected', selected - 1);
        setSearchParams(searchParams);
        break;
      }
    }
  };

  return (
    <StyledImageGallery>
      <StyledProductImage src={photos[selected]} alt='Product Image' />
      <StyledGalleryNavContainer>
        <Button
          icon={PrevNavSvg}
          as='image'
          variant='gallery'
          title='previous image'
          name='previous'
          onClick={handleClick}
        />
        <Button
          icon={NextNavSvg}
          as='image'
          variant='gallery'
          title='next image'
          name='next'
          onClick={handleClick}
        />
      </StyledGalleryNavContainer>
    </StyledImageGallery>
  );
}

MobileImageGallery.propTypes = {
  images: PropTypes.objectOf(PropTypes.array),
};
