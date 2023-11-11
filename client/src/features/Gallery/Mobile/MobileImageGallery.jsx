import { useSearchParams } from 'react-router-dom';

import {
  StyledGalleryNavContainer,
  StyledImageGallery,
  StyledProductImage,
} from './MobileImageGallery.styled';

import PrevNavSvg from '../../../assets/images/icon-previous.svg';
import NextNavSvg from '../../../assets/images/icon-next.svg';
import ProductImage1 from '../../../assets/images/image-product-1.jpg';
import ProductImage2 from '../../../assets/images/image-product-2.jpg';
import ProductImage3 from '../../../assets/images/image-product-3.jpg';
import Button from '../../../ui/Button/Button';

const productImage = [ProductImage1, ProductImage2, ProductImage3];
const MAX_IMAGES = productImage.length - 1;

export default function MobileImageGallery() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selected = Number(searchParams.get('selected')) || 0;

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
      <StyledProductImage src={productImage[selected]} alt='Product Image' />
      <StyledGalleryNavContainer>
        <Button
          icon={PrevNavSvg}
          as='svg'
          variant='gallery'
          title='previous image'
          name='previous'
          onClick={handleClick}
        />
        <Button
          icon={NextNavSvg}
          as='svg'
          variant='gallery'
          title='next image'
          name='next'
          onClick={handleClick}
        />
      </StyledGalleryNavContainer>
    </StyledImageGallery>
  );
}
