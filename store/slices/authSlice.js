import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../actions/authActions';
import { getTokenPayload, isTokenValid } from '../../utils/token-manager';

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
    // loginStart(state) {
    //   state.loading = true;
    //   state.errorMessage = '';
    // },
    // loginSuccess(state, action) {
    //   state.token = action.payload.token;
    //   state.loading = false;
    //   state.errorMessage = '';
    //   state.loggedInUser = action.payload.user;
    // },
    // loginFail(state, action) {
    //   state.loading = false;
    //   state.errorMessage = action.payload;
    // },
    authenticate(state, action) {
      state.token = action.payload.token;
    },
    logout(state) {
      state.token = null;
      state.loggedInUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.loading = false;
        state.errorMessage = '';
        state.loggedInUser = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

const { authenticate, logout } = authSlice.actions;

export const authenticateUser = () => {
  return async (dispatch) => {
    const token = await getTokenPayload();
    if (token && isTokenValid(token)) {
      dispatch(authenticate({ token }));
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    removeToken();
    dispatch(logout());
  };
};

export default authSlice.reducer;
