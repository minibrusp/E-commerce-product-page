import { createSlice } from '@reduxjs/toolkit';

import ImageThumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import ImageThumbnail3 from '../../assets/images/image-product-2-thumbnail.jpg';

const initialState = {
  cart: [
    {
      id: 1,
      name: 'Fall Limited Edition Sneakers',
      discount: 50,
      price: 125,
      image: ImageThumbnail1,
      quantity: 3,
      totalPrice: 375,
    },
    {
      id: 2,
      name: 'Fall Limited Edition Sneakers',
      discount: 50,
      price: 125,
      image: ImageThumbnail3,
      quantity: 1,
      totalPrice: 375,
    },
  ],
};

// cart/addCart

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: {
      prepare(id, name, discount, price, image, quantity, totalPrice) {
        return {
          payload: { id, name, discount, price, image, quantity, totalPrice },
        };
      },
      reducer(state, action) {
        state.cart.push(action.payload);
      },
    },
    deleteCartItem(state, action) {
      const isMoreThanOne = state.cart.find((cartProduct) => {
        return cartProduct.quantity > 1 ? true : false;
      });

      console.log('it is ', isMoreThanOne);

      const filteredCartItem = state.cart.filter((cartProduct) => {
        return cartProduct.id !== action.payload;
      });
      state.cart = filteredCartItem;
    },
  },
});

export const { addCartItem, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;
