import { createSlice } from '@reduxjs/toolkit';

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
    fetchDataStart(state) {
      state.loading = true;
      state.errorMessage = '';
    },
    fetchDataSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchDataFail(state, action) {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    addDataStart(state) {
      state.loading = true;
      state.error = '';
      state.addDataSuccess = false;
    },
    addDataSuccess(state) {
      state.loading = false;
      state.addDataSuccess = true;
    },
    addDataFail(state, action) {
      state.loading = false;
      state.errorMessage = action.payload;
      state.addDataSuccess = false;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
