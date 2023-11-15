import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

import {
  StyledGalleryNavContainer,
  StyledImageGallery,
  StyledProductImage,
} from './MobileImageGallery.styled';

import Button from '../../../ui/Button/index';
import ImageThumbnail from '../ImageThumbnails/index';

import PrevNavSvg from '../../../assets/images/icon-previous.svg';
import NextNavSvg from '../../../assets/images/icon-next.svg';

export default function MobileImageGallery({ images }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = Number(searchParams.get('selected')) || 0;

  const { photos, thumbnails } = images;

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
      <ImageThumbnail thumbnails={thumbnails} selected={selected} />
    </StyledImageGallery>
  );
}

MobileImageGallery.propTypes = {
  images: PropTypes.objectOf(PropTypes.array),
};
