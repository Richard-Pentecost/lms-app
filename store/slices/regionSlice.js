import { createSlice } from '@reduxjs/toolkit';
import { fetchRegions } from '../actions/regionActions';

const initialState = {
  regions: null,
  loading: false,
  errorMessage: '',
};

const regionSlice = createSlice({
  name: 'region',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegions.pending, (state) => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(fetchRegions.fulfilled, (state, action) => {
        state.regions = action.payload;
        state.loading = false;
      })
      .addCase(fetchRegions.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default regionSlice.reducer;
