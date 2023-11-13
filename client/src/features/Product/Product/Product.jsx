import AddProduct from '../../Cart/AddProduct/AddProduct';
import MobileImageGallery from '../../Gallery/Mobile/MobileImageGallery';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductPrice from '../ProductPrice/ProductPrice';
import { StyledProductDetails } from './Product.styled';

export default function Product() {
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
