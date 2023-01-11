import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../actions/productActions';

const initialState = {
  products: null,
  loading: false,
  errorMessage: '',
  addProductSuccess: false,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
  reducers: {
    // fetchProductsStart(state) {
    //   state.loading = true;
    //   state.errorMessage = '';
    // },
    // fetchProductsSuccess(state, action) {
    //   state.products = action.payload;
    //   state.loading = false;
    // },
    // fetchProductsFail(state, action) {
    //   state.loading = false;
    //   state.errorMessage = action.payload;
    // },
    // addProductStart(state) {
    //   state.errorMessage = '';
    //   state.addProductSuccess = false;
    // },
    // addProductSuccess(state) {
    //   state.addProductSuccess = true;
    // },
    // addProductFail(state, action) {
    //   state.errorMessage = action.payload;
    //   state.addProductSuccess = false;
    // },
  },
});

// export const productActions = productSlice.actions;

export default productSlice.reducer;
