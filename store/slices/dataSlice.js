import { createSlice } from '@reduxjs/toolkit';
import { addData, fetchData } from '../actions/dataActions';

const initialState = {
  data: null,
  loading: false,
  errorMessage: '',
  addDataSuccess: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      })
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
