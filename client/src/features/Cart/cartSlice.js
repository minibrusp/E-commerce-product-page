import { createSlice } from '@reduxjs/toolkit';

import { calculateTotal } from '../../utils/helpers';

const initialState = {
  cart: [],
  total: 0,
};

// cart/addCart

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action) {
      // for empty cart
      if (state.cart.length === 0) {
        state.cart.push(action.payload);
        state.total = action.payload.totalPrice;
        return;
      }

      // find if product exist if exist store in the var
      const foundCartProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      // if product doesnt exist push the new Product.
      // adds the cart total + totalPrice of new Product
      // exits the function
      if (!foundCartProduct) {
        state.cart.push(action.payload);
        state.total = state.total + action.payload.totalPrice;
        return;
      }

      // if it exist
      // adds the payload quantity to the found Product's quantity
      // recalculates found Product's total price
      // calculate the total price including found Product's
      foundCartProduct.quantity =
        foundCartProduct.quantity + action.payload.quantity;
      foundCartProduct.totalPrice =
        foundCartProduct.quantity * foundCartProduct.price;
      state.total = state.cart.reduce(calculateTotal, 0);
    },

    deleteCartItem(state, action) {
      const filteredCartItem = state.cart.filter((cartProduct) => {
        // includes the cart item in the filter if it is not same id
        if (cartProduct.id !== action.payload) return true;
        // excludes/deletes the cart item if quantity is below 2 / or 1
        if (cartProduct.quantity < 2) return false;
        // subtracts 1 count on quantity
        cartProduct.quantity = cartProduct.quantity - 1;
        // recalculates the totalPrice
        cartProduct.totalPrice = cartProduct.quantity * cartProduct.price;
        // include the cart item
        return true;
      });
      state.cart = filteredCartItem;
      state.total = state.cart.reduce(calculateTotal, 0);
    },
  },
});

export const { addCartItem, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;
