import { memo } from 'react';
import PropTypes from 'prop-types';

import {
  StyledCompany,
  StyledDescription,
  StyledName,
  StyledProductDescription,
} from './ProductDescription.styled';

const ProductDescription = memo(function MainProductDescription({
  company,
  name,
  description,
}) {
  return (
    <StyledProductDescription>
      <StyledCompany>{company}</StyledCompany>
      <StyledName>{name}</StyledName>
      <StyledDescription>{description}</StyledDescription>
    </StyledProductDescription>
  );
});

ProductDescription.propTypes = {
  company: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default ProductDescription;
