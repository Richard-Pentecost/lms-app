import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  loading: false,
  errorMessage: '',
  loggedInUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.errorMessage = '';
    },
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.loading = false;
      state.errorMessage = '';
      state.loggedInUser = action.payload.user;
    },
    loginFail(state, action) {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    authenticate(state, action) {
      state.token = action.payload.token;
    },
    logoutUser(state) {
      state.token = null;
      state.loggedInUser = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
