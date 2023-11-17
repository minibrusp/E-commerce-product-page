import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  status: '',
  customer: {},
};

const stripSlice = createSlice({
  name: 'stripe',
  initialState,
  reducers: {
    setSession: {
      prepare(id, status, customer) {
        return {
          payload: {
            id,
            status,
            customer,
          },
        };
      },
      reducer(state, action) {
        state.id = action.payload.id;
        state.status = action.payload.status;
        state.customer = action.payload.customer;
      },
    },
  },
});

export const { setSession } = stripSlice.actions;
export default stripSlice.reducer;
