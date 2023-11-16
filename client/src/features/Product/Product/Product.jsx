import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { addCartItem } from '../../Cart/cartSlice';

import AddToCart from '../../Cart/AddToCart';
import ImageGallery from '../../Gallery/ImageGallery';
import ProductDescription from '../ProductDescription/';
import ProductPrice from '../ProductPrice/';

import { StyledProductDetails, StyledProduct } from './Product.styled';

export default function Product({ product }) {
  const dispatch = useDispatch();
  const { id, name, company, description, discount, price, images } = product;

  const discountedPrice = useMemo(() => {
    return price * (discount / 100);
  }, [price, discount]);

  const addToCart = (quantity) => {
    const newProduct = {
      id,
      name,
      discount,
      price: discountedPrice,
      image: images.thumbnails[0],
      quantity: quantity,
      totalPrice: discountedPrice * quantity,
    };

    dispatch(addCartItem(newProduct));
  };

  return (
    <StyledProduct>
      <ImageGallery images={images} />
      <StyledProductDetails>
        <ProductDescription
          company={company}
          name={name}
          description={description}
        />
        <ProductPrice
          price={discountedPrice}
          discount={discount}
          originalPrice={price}
        />
        <AddToCart addToCart={addToCart} />
      </StyledProductDetails>
    </StyledProduct>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};
