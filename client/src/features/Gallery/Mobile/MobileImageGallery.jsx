import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

import { StyledImageGallery } from './MobileImageGallery.styled';

import ImageThumbnail from '../ImageThumbnails/index';
import Modal from '../../../ui/Modal/Modal';
import LightBox from '../LightBox';
import ProductImage from '../ProductImage';
import ImageGalleryNav from '../ImageGalleryNav';

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
      <Modal variation='lightbox'>
        <Modal.Open opens='lightbox'>
          <ProductImage src={photos[selected]} />
        </Modal.Open>
        <Modal.Window name='lightbox'>
          <LightBox
            selected={selected}
            photos={photos}
            thumbnails={thumbnails}
            variation='lightbox'
            handleClick={handleClick}
          />
        </Modal.Window>
      </Modal>
      <ImageGalleryNav handleClick={handleClick} />
      <ImageThumbnail thumbnails={thumbnails} selected={selected} />
    </StyledImageGallery>
  );
}

MobileImageGallery.propTypes = {
  images: PropTypes.objectOf(PropTypes.array),
};
