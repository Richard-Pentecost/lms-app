import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {
    fetchFarmsStart(state) {
      state.loading = true;
      state.errorMessage = '';
    },
    fetchFarmsSuccess(state, action) {
      state.farms = action.payload;
      state.loading = false;
    },
    fetchFarmsFail(state, action) {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const farmActions = farmSlice.actions;

export default farmSlice.reducer;
