import { createSlice } from '@reduxjs/toolkit';
import { fetchActiveFarms } from '../actions/farmActions';

const initialState = {
  farms: null,
  allFarms: null,
  loading: false,
  errorMessgae: '',
  addFarmSuccess: false,
};

const farmSlice = createSlice({
  name: 'farm',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveFarms.pending, (state) => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(fetchActiveFarms.fulfilled, (state, action) => {
        state.farms = action.payload;
        state.loading = false;
      })
      .addCase(fetchActiveFarms.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const farmActions = farmSlice.actions;

export default farmSlice.reducer;
