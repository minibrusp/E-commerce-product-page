import { createSlice } from '@reduxjs/toolkit';
import ImageThumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import ImageThumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import ImageThumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import ImageThumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';
import ProductImage1 from '../../assets/images/image-product-1.jpg';
import ProductImage2 from '../../assets/images/image-product-2.jpg';
import ProductImage3 from '../../assets/images/image-product-3.jpg';
import ProductImage4 from '../../assets/images/image-product-4.jpg';

const initialState = {
  products: [
    {
      id: 1,
      name: 'Fall Limited Edition Sneakers',
      company: 'Sneaker Company',
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      discount: 50,
      price: 250,
      images: {
        thumbnails: [
          ImageThumbnail1,
          ImageThumbnail2,
          ImageThumbnail3,
          ImageThumbnail4,
        ],
        photos: [ProductImage1, ProductImage2, ProductImage3, ProductImage4],
      },
    },
  ],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  deducers: {
    createProduct: {
      prepare(name, company, description, discount, price, images) {
        return {
          payload: { name, company, description, discount, price, images },
        };
      },
      reducer(state, action) {
        const id = state.products.length;
        const newProduct = {
          id,
          name: action.payload.name,
          company: action.payload.company,
          description: action.payload.description,
          discount: action.payload.discount,
          price: action.payload.price,
          images: {
            thumbnails: action.payload.images.thumbnails,
            photos: action.payload.images.photos,
          },
        };
        state.products.push(newProduct);
      },
    },
  },
});

export const { createProduct } = productSlice.actions;
export default productSlice.reducer;
