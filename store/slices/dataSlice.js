import { createSlice } from '@reduxjs/toolkit';
import { addData } from '../actions/dataAction';

const initialState = {
  data: null,
  loading: false,
  errorMessage: '',
  addDataSuccess: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // fetchDataStart(state) {
    //   state.loading = true;
    //   state.errorMessage = '';
    // },
    // fetchDataSuccess(state, action) {
    //   state.data = action.payload;
    //   state.loading = false;
    // },
    // fetchDataFail(state, action) {
    //   state.loading = false;
    //   state.errorMessage = action.payload;
    // },
    // addDataStart(state) {
    //   state.loading = true;
    //   state.error = '';
    //   state.addDataSuccess = false;
    // },
    // addDataSuccess(state) {
    //   state.loading = false;
    //   state.addDataSuccess = true;
    // },
    // addDataFail(state, action) {
    //   state.loading = false;
    //   state.errorMessage = action.payload;
    //   state.addDataSuccess = false;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addData.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.addDataSuccess = false;
      })
      .addCase(addData.fulfilled, (state) => {
        state.loading = false;
        state.addDataSuccess = true;
      })
      .addCase(addData.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
