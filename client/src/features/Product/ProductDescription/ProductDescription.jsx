import {
  StyledCompany,
  StyledDescription,
  StyledName,
  StyledProductDescription,
} from './ProductDescription.styled';

export default function ProductDescription() {
  return (
    <StyledProductDescription>
      <StyledCompany>Sneaker Company</StyledCompany>
      <StyledName>Fall Limited Edition Sneakers</StyledName>
      <StyledDescription>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </StyledDescription>
    </StyledProductDescription>
  );
}
