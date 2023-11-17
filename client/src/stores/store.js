import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/Cart/cartSlice';
import productSlice from '../features/Product/productSlice';
import stripeSlice from '../features/Stripe/stripeSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    stripe: stripeSlice,
  },
});

export default store;
