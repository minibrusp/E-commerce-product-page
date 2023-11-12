import styled from 'styled-components';
import MobileImageGallery from '../features/Gallery/Mobile/MobileImageGallery';
import ProductDescription from '../features/Product/ProductDescription/ProductDescription';
import ProductPrice from '../features/Product/ProductPrice/ProductPrice';
import AddProduct from '../features/Cart/AddProduct/AddProduct';

const StyledProductDetails = styled.div`
  padding: 1.3125rem 1.5625rem;
`;

export default function Home() {
  return (
    <>
      <MobileImageGallery />
      <StyledProductDetails>
        <ProductDescription />
        <ProductPrice />
      </StyledProductDetails>
      <AddProduct />
    </>
  );
}
