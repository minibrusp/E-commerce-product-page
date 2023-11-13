import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/Cart/cartSlice';
import productSlice from '../features/Product/productSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
  },
});

export default store;
