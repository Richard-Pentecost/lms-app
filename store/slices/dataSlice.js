import { createSlice } from '@reduxjs/toolkit';
import { addData, fetchData, updateData } from '../actions/dataActions';

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
    clearErrors(state) {
      state.loading = false;
      state.errorMessage = '';
    },
    clearSuccessFlag(state) {
      state.addDataSuccess = false;
    },
  },
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
      })
      .addCase(updateData.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.addDataSuccess = false;
      })
      .addCase(updateData.fulfilled, (state) => {
        state.loading = false;
        state.addDataSuccess = true;
      })
      .addCase(updateData.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { clearErrors, clearSuccessFlag } = dataSlice.actions;

export default dataSlice.reducer;
