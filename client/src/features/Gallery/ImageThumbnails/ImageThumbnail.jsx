import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import {
  StyledImage,
  StyledImageContainer,
  StyledImageThumbnails,
  StyledRadio,
} from './ImageThumbnail.styled';

export default function ImageThumbnails({ thumbnails: images, selected }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelection = (e) => {
    searchParams.set('selected', e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <StyledImageThumbnails>
      {images?.map((image, index) => (
        <StyledImageContainer
          key={`thumb-${index}`}
          $isChecked={selected == index}
        >
          <StyledRadio
            type='radio'
            name='thumbnail'
            id={image}
            value={index}
            checked={selected == index}
            onChange={(e) => handleSelection(e)}
          />
          <StyledImage src={image} />
        </StyledImageContainer>
      ))}
    </StyledImageThumbnails>
  );
}

ImageThumbnails.propTypes = {
  thumbnails: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.number,
};
